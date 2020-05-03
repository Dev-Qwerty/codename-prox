const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const User = require('../models/user-model');
const nodemailer = require('nodemailer');
const keys = require('../config/keys');
const expressSession = require('express-session');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
global.fetch = require("node-fetch");

const poolData = {
  UserPoolId: keys.cognito.userPoolId,
  ClientId: keys.cognito.clientId
}

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

let sess;

router.post('/signup', (req,res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const phoneNo = req.body.phoneNo;

  const emailData = {
    Name: 'email',
    Value: email
  };

  const phoneData = {
    Name: 'phone_number',
    Value: phoneNo
  };

  const nameData = {
    Name: 'given_name',
    Value: name
  };

  const emailAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(emailData);
  const phoneAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(phoneData);
  const nameAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(nameData);

  userPool.signUp(email, password, [ emailAttribute, phoneAttribute, nameAttribute ], null, (err,data) => {
    if(err) {
      return console.log(err);
    }
    res.send(data.user);
  })
});

router.post('/login', (req,res) => {
  const LoginData = {
    Username: req.body.username,
    Password: req.body.password
  }
  const AuthenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(LoginData);

  const UserData = {
    Username: req.body.username,
    Pool: userPool
  }

  req.session['login-errors'] = [];
  
  const cognitoUser = new AmazonCognitoIdentity.CognitoUser(UserData);
  cognitoUser.authenticateUser(AuthenticationDetails, {
    onSuccess: data => {
      res.send(data);
    },
    onFailure: err => {
      req.session['login-errors'].push(err.message)
      res.send({status: err.message});
    }
  })
})
/*
router.post('/register', (req, res) => {
    const { email, phone, password } = req.body;
    let errors = [];
  
    if (!email || !phone || !password) {
      errors.push({ msg: 'Please enter all fields' });
    }
    if (password.length < 6) {
      errors.push({ msg: 'Password must be at least 6 characters' });
    }
  
    if (errors.length > 0) {
      res.send({"status": "error", "errors": errors})
    } else {
      User.findOne({ email: email }).then(user => {
        if (user) {
          errors.push({ msg: 'Email already exists' });
          res.send({"status": "error", "errors": errors})
        } else {
          const newUser = new User({
            email,
            phone,
            password
          });
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then(user => {
                  res.send({"status": "Success", "email": user.email })
                })
                .catch(err => console.log(err));
            });
          });
        }
    });
    }
});
*/
/*
router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err); // will generate a 500 error
    }
    // Generate a JSON response reflecting authentication status
    if (! user) {
      return res.send({ success : false, message : 'authentication failed' });
    }
    // ***********************************************************************
    // "Note that when using a custom callback, it becomes the application's
    // responsibility to establish a session (by calling req.login()) and send
    // a response."
    // Source: http://passportjs.org/docs
    // ***********************************************************************
    req.login(user, loginErr => {
      if (loginErr) {
        return next(loginErr);
      }
      sess = req.session;
      sess.email = req.body.email;
      console.log(sess);
      return res.send({ success : true, message : 'authentication succeeded', email: req.body.email });
    });      
  })(req, res, next);
});
*/
router.get('/logout',(req,res) => {
   res.send({status: "Success"});

});

router.post('/sendResetLink', (req,res) => {
  let email = req.body.email;
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'atest6533@gmail.com',
        pass: keys.gmail.password
    }
  })
  User.findOne({email: email}, function(err, document) {
      if(err) throw err;
      else {
        if(document == null) {
          res.send({status: "email not found"});
        }
        else {
          var mailOptions = {
            from: 'atest6533@gmail.com',
            to: email,
            subject: 'Reset Password',
            text: 'Reset Password Link'
          };
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
          res.send({status: "success"});
        }
      }
  })
});

router.post('/resetPassword', (req,res) => {
  let email = req.body.email;
  let newPassword = req.body.password;
  let confirmNewPassword = req.body.password2;
  if(newPassword == confirmNewPassword && newPassword.length > 8) {
    bcrypt.hash(newPassword, 10 , function(err, hash) {
      newPassword = hash;
      User.update({email: email}, {password: newPassword}, function(err, count, result) {
        if(err) throw err;
        else {
          if(count.n == 0) {
            res.send({status: "email not found"});
          }
          else {
            res.send({status: "success"});
          }
        }
      });
  });
  }
})

module.exports = router;