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


//import routes
const authRouter = require("./routes/auth-router");


// set relative path
app.use('/auth', authRouter)



// Home Route
app.get('/', (req, res) => {
    res.render('home')
})




// Initialze Server
app.listen(3000, () => {
    console.log("App listening at port 3000");
});