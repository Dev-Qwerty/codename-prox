const express = require('express');
const router = express.Router();
const Token = require('../models/token');
const keys = require('../config/keys');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const crypto = require('crypto');
const User = require('../models/user-model');
const Company = require('../models/company-model');
const Worker = require('../models/worker-model');
const request = require('request');
const crypt = require('../misc/crypt');

const poolData = {
    UserPoolId: keys.cognito.userPoolId,
    ClientId: keys.cognito.clientId
  }
  
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    
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
      const cognitoUser = new AmazonCognitoIdentity.CognitoUser(UserData);
      cognitoUser.authenticateUser(AuthenticationDetails, {
        onSuccess: data => {
          const username = crypt.encrypt(data.idToken.payload.sub);
          const pidToken = crypt.encrypt(Math.random().toString(36).slice(2));
          const category = data.idToken.payload['custom:category']; 
          Token.findOne({id: username},(err,results) => {
            //If token doesn't exist, create new token
            if(results == null) {
              const newToken = new Token({
                token: pidToken,
                id: username
              })
              newToken
              .save()
              .then(token => {
                if(category == 'Customer') {
                  User.findOne({userID: crypt.decrypt(username)}, (err,r) => {
                    if(r.length != 0) {
                    res.send({ status: "Success", jwt: pidToken, id: username, token: token, category: category, completedProfile: r.completedProfile, phoneNo: r.phone, email: r.email });
                    }
                  })
                }
                else if(category == 'Worker') {
                  Worker.findOne({workerID: crypt.decrypt(username)}, (err,r) => {
                    if(r.length != 0) {
                      res.send({ status: "Success", jwt: pidToken, id: username, token: token, category: category, completedProfile: r.completedProfile, phoneNo: r.phone, email: r.email });
                    }
                  })
                }
                else {
                  Company.findOne({companyID: crypt.decrypt(username)}, (err,r) => {
                    if(r.length != 0) {
                      res.send({ status: "Success", jwt: pidToken, id: username, token: token, category: category, completedProfile: r.completedProfile, phoneNo: r.phone, email: r.email });
                    }
                  })
                }
              })
              .catch(err => {
                console.log(err);
              })
            }
            //Else, update the token on login
            else {
              let t = {};
              t.token = pidToken;
              t = {$set: t};
              Token.updateOne({id: username}, t).then(() => {
                if(category == 'Customer') {
                  User.findOne({userID: crypt.decrypt(username)}, (err,r) => {
                    if(err) console.log(err);
                    res.send({ status: "Success", jwt: pidToken, username: username, category: category, completedProfile: r.completedProfile, id: username, phoneNo: r.phone, email: r.email });
                  })
                }
                else if(category == 'Worker') {
                  Worker.findOne({workerID: crypt.decrypt(username)}, (err,r) => {
                      res.send({ status: "Success", jwt: pidToken, username: username, category: category, completedProfile: r.completedProfile, id: username, phoneNo: r.phone, email: r.email })
                  })
                }
                else {
                  Company.findOne({companyID: crypt.decrypt(username)}, (err,r) => {
                    res.send({ status: "Success", jwt: pidToken, username: username, category: category, completedProfile: r.completedProfile, id: username, phoneNo: r.phone, email: r.email });
                  })
                }
              })
            }
          })
          
        },
        onFailure: err => {
          res.send(err.code);
        }
      })
})
router.post('/verifyToken', (req,res) => {
  const response = req.body.response;
  request.post({ headers: {'content-type' : 'application/json'}
               , url: 'https://www.google.com/recaptcha/api/siteverify?secret=6Lcpzq8ZAAAAACwReGAzTD5RtDp8VINQslG7eAFr&response='+response}
               , function(error, r, body){
   res.send(body); 
}); 

})
module.exports = router;