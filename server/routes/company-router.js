const express = require('express');
const router = express.Router();
const keys = require('../config/keys');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const Company = require('../models/company-model');

const poolData = {
    UserPoolId: keys.cognito.userPoolId,
    ClientId: keys.cognito.clientId
}

const companyPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

router.post('/signup', (req,res) => {
    const { name, email, password, phoneNo } = req.body;
       const nameData = {
        Name: 'given_name',
        Value: name
    }
    const phoneData = {
        Name: 'phone_number',
        Value: phoneNo
    }
    const emailData = {
        Name: 'email',
        Value: email
    }
    const categoryData = {
        Name: 'custom:category',
        Value: 'Company'
    }

    const emailAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(emailData);
    const nameAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(nameData);
    const phoneAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(phoneData);
    const categoryAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(categoryData);

    companyPool.signUp(email, password, [emailAttribute, nameAttribute, phoneAttribute, categoryAttribute], null, (err, data) => {
        if(err) {
            console.log(err)
        }
        const companyID = data.userSub;
        const newCompany = new Company({
          email,
          phoneNo,
          name,
          companyID
        })
        newCompany
        .save()
        .then((company) => {
          res.send({user: company, data: data.user});
        })
    })
})

router.post('/login', (req,res) => {
    const authenticationData = {
        Username: req.body.email,
        Password: req.body.password,
      };
      const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
      const userData = {
        Username: req.body.email,
        Pool: companyPool
      };
      const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (session) {
          const tokens = {
            accessToken: session.getAccessToken().getJwtToken(),
            idToken: session.getIdToken().getJwtToken(),
            refreshToken: session.getRefreshToken().getToken()
          };
          cognitoUser['tokens'] = tokens; // Save tokens for later use
          res.send(cognitoUser);
        },
        onFailure: function (err) {
          res.send(err.code);
        },
      });
})

router.post('/forgotPassword', (req,res) => {
    const cognitoUser = new AmazonCognitoIdentity.CognitoUser({
      Username: req.body.email,
      Pool: companyPool
    });
    cognitoUser.forgotPassword({
      onSuccess: function(result) {
        res.send({status: "Success",  res: result});
      },
      onFailure: function(err) {
        res.send({status: "Error", error: err});
      }
    });
  });

  router.post('/confirmFPassword', (req,res) => {
    const cognitoUser = new AmazonCognitoIdentity.CognitoUser({
      Username: req.body.email,
      Pool: companyPool
    });
    const verificationCode = req.body.code;
    const newPassword = req.body.password;
    cognitoUser.confirmPassword(verificationCode,newPassword, {
      onSuccess: function(result) {
        res.send({status: "Success",  res: result});
      },
      onFailure: function(err) {
        res.send({status: "Error", error: err});
      }
    })
  })

  router.post('/confirmEmail', (req,res) => {
    const cognitoUser = new AmazonCognitoIdentity.CognitoUser({
      Username: req.body.email,
      Pool: companyPool
    })
    const confirmationCode = req.body.code;
    cognitoUser.confirmRegistration(confirmationCode, true, function(err,result){
      if(err) {
        res.send({status: "Error", error: err});
      }
      res.send({status: "Success", res: result});
    })
  })

module.exports = router;