const express = require('express');
const config = require('./config/mongo-connect');
const passport = require('passport')
const passportSetup = require('./config/passport-config')
const authRouter = require('./routes/auth-router')

const app = express();

app.set('view engine','ejs')
app.use(passport.initialize())
app.use(passport.session())

app.use('/auth', authRouter)

app.get('/', (req,res) => {
    res.render('home')
})

app.listen(3000);