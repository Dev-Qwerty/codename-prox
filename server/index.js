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