const express = require('express');
const config = require('./config/mongo-connect');  // import mongoDB configuration
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
require('./config/passport-config')(passport);

const app = express();
app.use(cors());
/*app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});*/

// Middleware for body parsing
app.use(express.urlencoded({ extended: false }))
app.use(express.json({ extended: false }))

app.use(session(
    {
        secret: 'codenameprox',
        saveUninitialized: false,
        resave: false
    }));

app.set('view engine', 'ejs')

// Passport Middleware
app.use(passport.initialize())
app.use(passport.session())

// import models
const versionModel = require('./models/version-model');
const mainservicemodel = require('./models/mainservice-model');


//import routes
const authRouter = require("./routes/auth-router");
const subserviceRouter = require('./routes/subservice-router');
const workerRouter = require("./routes/worker-router");
const companyRouter = require("./routes/company-router");
const orderRouter = require('./routes/order-router');


// set relative path
app.use('/auth', authRouter)
app.use('/services', subserviceRouter)
app.use('/worker', workerRouter)
app.use('/company', companyRouter)
app.use('/orders', orderRouter)

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




// Initialze Server
app.listen(3000, () => {
    console.log("App listening at port 3000");
});