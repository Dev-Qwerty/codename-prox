const express = require('express');
const config = require('./config/mongo-connect');  // import mongoDB configuration
const session = require('express-session');
const cors = require('cors');
const aws = require('aws-sdk');
const multer = require('multer');
const keys = require('./config/keys');
const fs = require('fs');
const User = require('./models/user-model');
const Worker = require('./models/worker-model');
const Company = require('./models/company-model');
const crypt = require('./misc/crypt');
const path = require('path');

const storage = multer.diskStorage({
    destination : 'uploads/',
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

aws.config.update({
    accessKeyId: keys.s3.accessKey,
    secretAccessKey: keys.s3.secret,
    region: 'ap-south-1'
});

const app = express();
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Middleware for body parsing
const parseUrl = express.urlencoded({ extended: false })
const parseJson = express.json({ extended: false })

app.use(session(
    {
        secret: 'codenameprox',
        saveUninitialized: false,
        resave: false
    }));

app.set('view engine', 'ejs')

// import models
const versionModel = require('./models/version-model');
const mainservicemodel = require('./models/mainservice-model');


//import routes
const customerRouter = require("./routes/customer-router");
const subserviceRouter = require('./routes/subservice-router');
const workerRouter = require("./routes/worker-router");
const companyRouter = require("./routes/company-router");
const orderRouter = require('./routes/order-router');
const workerRequest = require('./routes/workrequest-route');
const loginRouter = require('./routes/login-route');
const completeOrder = require('./routes/ordercomplete-route');


// set relative path
app.use('/customer', [parseUrl,parseJson], customerRouter)
app.use('/services', [parseUrl,parseJson], subserviceRouter)
app.use('/worker', [parseUrl,parseJson], workerRouter)
app.use('/company', [parseUrl,parseJson], companyRouter)
app.use('/orders', orderRouter)
app.use('/request', [parseUrl,parseJson], workerRequest)
app.use('/auth', [parseUrl,parseJson], loginRouter)
app.use('/completeorder', [parseUrl,parseJson], completeOrder)

app.post('/autosuggest',[parseUrl,parseJson], async (req, res) => {
    try {
        let query = req.body.query;
        let mainservice = await mainservicemodel.findOne({"$text": {"$search": query}})
        let suggestions =  mainservice.subServices
        suggestions.unshift(mainservice.serviceName)
        res.send(suggestions)
    } catch (error) {
        let suggestions = ["Cleaning","Electronics and Appliances","Painting","Saloon","Birthday Party"]
        res.send(suggestions)
    }
    
})

// version check for mobile app
app.get('/checkserviceversion', async (req, res) => {
    let serviceVersion = req.query.serviceVersion;
    let offerVersion = await versionModel.find({}, 'offerVersion -_id')
    if (serviceVersion == offerVersion[0].offerVersion) {
        res.send({ "versionChange": false });
    } else {
        let mainservice = await mainservicemodel.find({})
        res.send({ "versionChange": true, "services": mainservice, "version": offerVersion[0].offerVersion })
    }
})

//Creating a new instance of S3:
const s3= new aws.S3();

//POST method route for uploading file
app.post('/post_file', upload.single('demo_file'), function (req, res) {
  //Multer middleware adds file(in case of single file ) or files(multiple files) object to the request object.
  //req.file is the demo_file
  const category = req.query.category;
  const id = req.query.id;
  const newFileName = 'profilepics/'+ id.slice(1,6) + path.extname(req.file.path);
  const FileName = id.slice(1,6) + path.extname(req.file.path);
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
  if(!allowedTypes.includes(req.file.mimetype)){
    res.send({status: "Error!", code: "Invalid format!", success: false});
  }
  else {
    checkFileExists(FileName, function(err, results) {
      if(results == 1) {
        deleteExistingFile(FileName, category, id, function(err, results) {
          if(results == 1) {
            console.log("Deleted Existing File!");
            uploadFile(req.file.path, newFileName ,res, category,id);
          }
        })
      }
      else {
        uploadFile(req.file.path, newFileName ,res, category,id);
      }
    })
    //uploadFile(req.file.path, newFileName ,res, category,id);
  }
})

//GET method route for downloading/retrieving file
app.get('/get_file/:file_name',(req,res)=>{
  retrieveFile(req.params.file_name, res);
});

app.get('/delete_file/:file_name', (req,res) => {
  const category = req.query.category;
  const id = req.query.id;
  const file_name = req.params.file_name;
  deleteFile(file_name, res, category, id);
})
// Initialze Server
app.listen(3000, () => {
    console.log("App listening at port 3000");
});

function uploadFile(source,targetName,res, category,id){
    console.log('preparing to upload...');
    fs.readFile(source, function (err, filedata) {
      if (!err) {
        const putParams = {
            Bucket      : 'profilepics-codename-eizoft',
            Key         : targetName,
            Body        : filedata,
            ContentType : 'image/jpeg'
        };
        s3.putObject(putParams, function(err, data){
          if (err) {
            console.log('Could nor upload the file. Error :',err);
            return res.send({success:false});
          } 
          else{
            fs.unlink(source, function(){console.log("Deleted from localStorage!")});// Deleting the file from uploads folder(Optional).Do Whatever you prefer.
            console.log('Successfully uploaded the file');
            if(category == 'Customer' || category == 'customer') {
              let user = {};
              user.profilePicLink = 'http://localhost:3000/get_file/'+targetName.slice(12);
              User.findOneAndUpdate({userID: crypt.decrypt(id)}, user, (err,doc,results) => {
                if(err) {
                  res.send({err: err});
                }
                else {
                  return res.send({success:true});
                }
              })
            }
            else if(category == 'Worker' || category == 'worker') {
              let worker = {};
              worker.profilePicLink = 'http://localhost:3000/get_file/'+targetName.slice(12);
              Worker.findOneAndUpdate({workerID: crypt.decrypt(id)}, worker, (err,doc,results) => {
                if(err) {
                  res.send({err: err});
                }
                else {
                  return res.send({success:true});
                }
              })
            }
          }
        });
      }
      else{
        console.log({'err':err});
      }
    });
  }

//The retrieveFile function
function retrieveFile(filename,res){

  const getParams = {
    Bucket: 'profilepics-codename-eizoft',
    Key: 'profilepics/'+filename
  };

  s3.getObject(getParams, function(err, data) {
    if (err){
      return res.status(400).send({success:false,err:err});
    }
    else{
        res.set("Content-Type", 'image/png');
        res.set("Content-Disposition", "inline;");
      return res.send(data.Body);
    }
  });
}

function deleteFile(filename, res, category,id) {
  const deleteParams = {
    Bucket: 'profilepics-codename-eizoft',
    Key: 'profilepics/'+filename
  }
  s3.deleteObject(deleteParams, (err,data) => {
    if(err) {
      return res.status(400).send({success:false,err:err});
    }
    else {
      if(category == 'Worker' || category == 'worker') {
        let worker = {};
        worker.profilePicLink =  "";
        Worker.findOneAndUpdate({workerID: crypt.decrypt(id)}, worker, (err,doc,result) => {
          return res.send({status: "Success"});
        })
      }
      else if(category == 'Customer' || category == 'customer') {
        let user = {};
        user.profilePicLink = "";
        User.findOneAndUpdate({userID: crypt.decrypt(id)}, user, (err,doc,result) => {
          return res.send({status: "Success"});
        })
      }
    }
  })
}

function checkFileExists(file_name, callback) {
  const getParams = {
    Bucket: 'profilepics-codename-eizoft',
    Key: 'profilepics/'+file_name
  };

  s3.getObject(getParams, function(err, data) {
    if (err){
      callback(err, 0);
    }
    else{
        callback(null, 1);
    }
  });
}

function deleteExistingFile(file_name, category, id, callback) {
  const deleteParams = {
    Bucket: 'profilepics-codename-eizoft',
    Key: 'profilepics/'+file_name
  }
  s3.deleteObject(deleteParams, (err,data) => {
    if(err) {
      callback(err, 0);
    }
    else {
      if(category == 'Worker' || category == 'worker') {
        let worker = {};
        worker.profilePicLink =  "";
        Worker.findOneAndUpdate({workerID: crypt.decrypt(id)}, worker, (err,doc,result) => {
          callback(null, 1);
        })
      }
      else if(category == 'Customer' || category == 'customer') {
        let user = {};
        user.profilePicLink = "";
        User.findOneAndUpdate({userID: crypt.decrypt(id)}, user, (err,doc,result) => {
          callback(null,1);
        })
      }
    }
  })
}