const express = require('express');
const config = require('./config/mongo-connect');  // import mongoDB configuration
const passport = require('passport');
const passportSetup = require('./config/passport-config');

const app = express();

// Middleware for body parsing
app.use(express.urlencoded({ extended: false }))
app.use(express.json({ extended: false }))


app.set('view engine', 'ejs')

// Passport Middleware
app.use(passport.initialize())
app.use(passport.session())

// import models
const versionModel = require('./models/version-model')
const mainservicemodel = require('./models/mainservice-model')


//import routes
const authRouter = require("./routes/auth-router");


// set relative path
app.use('/auth', authRouter)



// Home Route
app.get('/', (req, res) => {
    res.render('home')
})


// version check for mobile app
app.get('/checkserviceversion', async (req, res) => {
    let serviceVersion = req.query.serviceVersion;
    let offerVersion = await versionModel.find({}, 'offerVersion -_id')
    if (serviceVersion == offerVersion[0].offerVersion) {
        res.send({ "versionChange": false });
    } else {
        let mainservice = await mainservicemodel.find({})
        res.send({ "versionChange": true, "services": mainservice })
    }
})




// Initialze Server
app.listen(3000, () => {
    console.log("App listening at port 3000");
});