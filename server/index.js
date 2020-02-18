const express = require('express');
const config = require('./config/mongo-connect');
const passport = require('passport')
const passportSetup = require('./config/passport-config')
const authRouter = require('./routes/auth-router')
const userRouter = require('./routes/user') 
const workerRouter = require('./routes/worker') 
const signinRouter = require('./routes/signin') 
const signupRouter = require('./routes/signup') 

const app = express();

app.set('view engine','ejs')
app.use(passport.initialize())
app.use(passport.session())


app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/worker', workerRouter)
app.use('/signin', signinRouter)
app.use('/signup', signupRouter)

// Home Route
app.get('/', (req,res) => {
    res.render('home')
})


// Route for About Us
app.get('/aboutus', (req, res) => {
    res.send("About us page")
})

// Initialze Server
app.listen(3000, () => {
    console.log("App listening at port 3000");
});