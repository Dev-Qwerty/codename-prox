const express = require('express');
const router = express.Router();
const Token = require('../models/token');
const keys = require('../config/keys');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const crypto = require('crypto');

const poolData = {
    UserPoolId: keys.cognito.userPoolId,
    ClientId: keys.cognito.clientId
  }
  
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
  

function encrypt(text) {
    var mykey = crypto.createCipher('aes-128-cbc', 'afvbbmhghhh');
    var mystr = mykey.update(text, 'utf8', 'hex')
    mystr += mykey.final('hex');
    return mystr;
  }
  
  function decrypt(text) {
    var mykey = crypto.createDecipher('aes-128-cbc', 'afvbbmhghhh');
    var mystr = mykey.update(text, 'hex', 'utf8')
    mystr += mykey.final('utf8');
    return mystr;
  }
  
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
      console.log("Reached here!");
      const cognitoUser = new AmazonCognitoIdentity.CognitoUser(UserData);
      cognitoUser.authenticateUser(AuthenticationDetails, {
        onSuccess: data => {
          const username = encrypt(data.idToken.payload.sub);
          const pidToken = encrypt(Math.random().toString(36).slice(2));
          const category = data.idToken.payload['custom:category']; 
          Token.find({id: username},(err,results) => {
            //If token doesn't exist, create new token
            if(results.length == 0) {
              const newToken = new Token({
                token: pidToken,
                id: username
              })
              newToken
              .save()
              .then(token => {
                res.send({ status: "Success", jwt: pidToken, username: username, token: token, category: category });
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
              Token.update({id: username}, t).then(() => {
                res.send({status: "Success", jwt: pidToken, username: username, t: t, category: category });
              })
            }
          })
          
        },
        onFailure: err => {
          console.log(err);
        }
      })
})

module.exports = router;