const express = require('express');
const bodyParser = require('body-parser')
const config = require('./config/mongo-connect');
const passport = require('passport');
const passportSetup = require('./config/passport-config');
const authRouter = require('./routes/auth-router');
const userRouter = require('./routes/user'); 
const workerRouter = require('./routes/worker');
const bodyParser = require('body-parser');
const adminRouter = require('./routes/admin');

const app = express();


app.set('view engine','ejs')
app.use(passport.initialize())
app.use(passport.session())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/worker', workerRouter)
app.use('/admin' ,adminRouter)


// Home Route
app.get('/', (req,res) => {
    res.render('home')
})

app.get('/gethired', (req, res) => {
    res.send({message: "ok"})
})


// Initialze Server
app.listen(3000, () => {
    console.log("App listening at port 3000");
});