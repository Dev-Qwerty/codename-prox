const express = require('express');
const router = express.Router();
const crypto = require('crypto')
const passport = require('passport');
const User = require('../models/user-model');
const nodemailer = require('nodemailer');
const keys = require('../config/keys');
const expressSession = require('express-session');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const multer = require("multer");
const aws = require("aws-sdk");
const fs = require("fs");
const multerS3 = require("multer-s3")
const Token = require('../models/token');
const crypt = require('../misc/crypt');
global.fetch = require("node-fetch");

let id = "";

const poolData = {
  UserPoolId: keys.cognito.userPoolId || process.env['COGNITOUSERPOOLID'],
  ClientId: keys.cognito.clientId || process.env['COGNITOCLIENTID']
}

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

let sess;

router.post('/signup', (req, res) => {
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

  const categoryData = {
    Name: 'custom:category',
    Value: 'Customer'
  }

  const emailAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(emailData);
  const phoneAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(phoneData);
  const nameAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(nameData);
  const categoryAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(categoryData);

  userPool.signUp(email, password, [emailAttribute, phoneAttribute, nameAttribute, categoryAttribute], null, (err, data) => {
    if (err) {
      res.send(err.message);
    }
    const userID = data.userSub;
    const phone = phoneNo;
    const newUser = new User({
      email,
      phone,
      userID
    })
    newUser
      .save()
      .then((user) => {
        if (user && data.user) {
          res.send({ status: "Success" });
        }
        else {
          res.send({ status: "Error" });
        }
      })
      .catch(err => console.log(err))
  })
});

router.post('/forgotPassword', (req, res) => {
  const cognitoUser = new AmazonCognitoIdentity.CognitoUser({
    Username: req.body.email,
    Pool: userPool
  });
  cognitoUser.forgotPassword({
    onSuccess: function (result) {
      res.send({ status: "Success", res: result });
    },
    onFailure: function (err) {
      res.send({ status: "Error", error: err });
    }
  });
});

router.post('/confirmFPassword', (req, res) => {
  const cognitoUser = new AmazonCognitoIdentity.CognitoUser({
    Username: req.body.email,
    Pool: userPool
  });
  const verificationCode = req.body.code;
  const newPassword = req.body.password;
  cognitoUser.confirmPassword(verificationCode, newPassword, {
    onSuccess: function (result) {
      res.send({ status: "Success", res: result });
    },
    onFailure: function (err) {
      res.send({ status: "Error", error: err });
    }
  })
})

router.post('/confirmEmail', (req, res) => {
  const cognitoUser = new AmazonCognitoIdentity.CognitoUser({
    Username: req.body.email,
    Pool: userPool
  })
  const confirmationCode = req.body.code;
  cognitoUser.confirmRegistration(confirmationCode, true, function (err, result) {
    if (err) {
      res.send({ status: "Error", error: err });
    }
    res.send({ status: "Success", res: result });
  })
})

router.post('/completeProfile/:id', (req, res) => {
  const t = req.body.token;
  Token.findOne({token: t}, (err,results) => {
    if(results.length == 0) {
      res.send({status: "Error!", code: "Invalid token!"});
    }
    else {
      let id = crypt.decrypt(req.params.id);
      let user = {};

      if (req.body.name) user.name = req.body.name;
      user = { $set: user }

      User.update({ userID: id }, user).then(() => {
        res.send({status: "Success", user: user});
      }).catch((err) => {
        console.log(err);
      })

    }
  })
})

router.post('/updateProfile/:id', (req, res) => {
  const t = req.body.token;
  Token.findOne({token: t}, (err,results) => {
    if(results.length == 0) {
      res.send({status: "Error!", code: "Invalid token!"});
    }
    else {
      let id = crypt.decrypt(req.params.id);
  let user = {};

  if (req.body.name) user.name = req.body.name;
  if (req.body.addresses) user.addresses = req.body.addresses;

  if (req.body.email && req.body.phoneNo) {

    user.email = req.body.email;
    user.phone = req.body.phoneNo;

    if (!req.body.password || !req.body.oldEmail) res.send({ status: "Error", msg: "Password/Old Email Required!" });
    const authenticationData = {
      Username: req.body.oldEmail,
      Password: req.body.password
    }
    const AuthenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
    const UserData = {
      Username: req.body.oldEmail,
      Pool: userPool
    }
    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(UserData);
    cognitoUser.authenticateUser(AuthenticationDetails, {
      onSuccess: data => {
        const emailData = {
          Name: 'email',
          Value: req.body.email
        }
        const phoneData = {
          Name: 'phone_number',
          Value: req.body.phoneNo
        }

        const emailAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(emailData);
        const phoneAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(phoneData);

        cognitoUser.updateAttributes([emailAttribute, phoneAttribute], (err, data) => {
          if (err) {
            res.send({ status: "Error", error: err });
          }
          user = { $set: user };
          User.update({ email: authenticationData.Username }, user).then(() => {
            res.send({ status: "Update Success!", data: data, user: user });
          })
        })
      },
      onFailure: err => {
        res.send(err.code);
      }
    })

  }

  if (req.body.email) {
    if (!req.body.password || !req.body.oldEmail) res.send({ status: "Error", msg: "Password/Old Email Required!" });
    const authenticationData = {
      Username: req.body.oldEmail,
      Password: req.body.password
    }
    const AuthenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
    const UserData = {
      Username: req.body.oldEmail,
      Pool: userPool
    }
    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(UserData);
    cognitoUser.authenticateUser(AuthenticationDetails, {
      onSuccess: data => {
        const emailData = {
          Name: 'email',
          Value: req.body.email
        }

        const emailAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(emailData);

        cognitoUser.updateAttributes([emailAttribute], (err, data) => {
          if (err) {
            res.send({ status: "Error", error: err });
          }
          user = { $set: user };
          User.update({ email: authenticationData.Username }, user).then(() => {
            res.send({ status: "Update Success!", data: data, user: user });
          })
        })
      },
      onFailure: err => {
        res.send(err.code);
      }
    })
    }
  }
  })
  
})

router.post('/logout', (req, res) => {
  const cognitoUser = new AmazonCognitoIdentity.CognitoUser({
    Username: req.body.email,
    Pool: userPool
  })
  cognitoUser.signOut();
  const id = req.body.userID;
  Token.deleteOne({id: id}).then(() => {
    res.send({ status: "Success" });
  })

})

router.post('/addAddress', (req, res) => {
  const t = req.body.token;
  Token.findOne({token: t}, (err,result) => {
    if(result.length == 0) {
      res.send({status: "Error!", code: "Invalid token!"});
    }
    else {
      const newAddress = req.body.address;
      let user = {};
      user.addresses = newAddress;
      user.completedProfile = req.body.completedProfile;
      user = { $push: user };
      User.findOneAndUpdate({ userID: req.body.id }, user, (err,doc,result) => {
        if(err) {
          res.send({err: err});
        }
        else {
          res.send({status: "Success", user: user});
        }
      })
    }
  })
})

router.post('/viewProfile', (req, res) => {
  const t = req.body.token;
  Token.findOne({token: t}, (err,result) => {
    if(result.length == 0) {
      res.send({status: "Error!", code: "Invalid token!"});
    }
    else {
      const userID = req.body.userID;
      User.findOne({ userID: userID }, (err, results) => {
        if (err) {
          res.send({ status: "Error!", error: err });
        }
        res.send({ status: "Success", data: results });
      })
    }
  })
})

router.post('/verifyCategory', (req, res) => {
  const userIDhash = req.body.userID;
  const userID = crypt.decrypt(userIDhash);
  User.findOne({ userID: userID }, (err, results) => {
    if (results) {
      res.send({ status: "Success" });
    }
    else {
      res.send({ status: "Not found!" });
    }
  })
})

router.get('/getBasicProfile/:id', (req,res) => {
  const id = crypt.decrypt(req.params.id);
  User.findOne({userID: id}, (err,result) => {
    res.send({name: result.name, profile: result.name.charAt(0), profilePicLink: result.profilePicLink}) //To Do: after customer dashboard is ready
  })
})

router.get('/getCompleteProfile', (req,res) => {
  const id = crypt.decrypt(req.query.id);
  const token = req.query.token;
  Token.findOne({token: token},(err,result) => {
    if(result.length == 0) {
      res.send({status: "Error!", code: "Invalid token!"});
    }
    else {
      User.findOne({userID: id}, (err,results) => {
        res.send(results);
      })
    }
  })
})

module.exports = router;