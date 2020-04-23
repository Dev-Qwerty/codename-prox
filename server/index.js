const express = require('express');
const config = require('./config/mongo-connect');  // import mongoDB configuration
const passport = require('passport');
const session = require('express-session');
require('./config/passport-config')(passport);

const app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });
// Middleware for body parsing
app.use(express.urlencoded({ extended: false }))
app.use(express.json({ extended: false }))

app.use(session(
    {secret: 'codenameprox', 
    saveUninitialized: false,
    resave: false
}));

app.set('view engine', 'ejs')

// Passport Middleware
app.use(passport.initialize())
app.use(passport.session())

// import models
const versionModel = require('./models/version-model')


//import routes
const authRouter = require("./routes/auth-router");

app.get('/', function(req, res){
    if(req.session.page_views){
       req.session.page_views++;
       res.send("You visited this page " + req.session.page_views + " times");
    } else {
       req.session.page_views = 1;
       res.send("Welcome to this page for the first time!");
    }
 });


// set relative path
app.use('/auth', authRouter)


// version check for mobile app
app.get('/checkserviceversion', async (req, res) => {
    let serviceVersion = req.body.serviceVersion
    let offerVersion = await versionModel.find({}, 'offerVersion -_id')
    if (serviceVersion === offerVersion[0].offerVersion) {
        console.log(offerVersion[0].offerVersion + typeof (offerVersion))
        res.send(offerVersion + " Same Version");
    } else {
        // console.log(serviceVersion + typeof (serviceVersion))
        console.log(offerVersion[0].offerVersion + typeof (offerVersion))
        res.send(offerVersion + " Version Changed")
    }
})




// Initialze Server
app.listen(3000, () => {
    console.log("App listening at port 3000");
});