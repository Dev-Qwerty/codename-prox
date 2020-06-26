const express = require('express');
const router = express.Router();
const keys = require('../config/keys');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const Company = require('../models/company-model');
const Token = require('../models/token');
const crypto = require('crypto');
const crypt = require('../misc/crypt');

const poolData = {
    UserPoolId: keys.cognito.userPoolId || process.env['COGNITOUSERPOOLID'],
    ClientId: keys.cognito.clientId || process.env['COGNITOCLIENTID']
}

const companyPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

router.post('/signup', (req,res) => {
    const { name, email, password, phone } = req.body;
       const nameData = {
        Name: 'given_name',
        Value: name
    }
    const phoneData = {
        Name: 'phone_number',
        Value: phone
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
          phone,
          name,
          companyID
        })
        newCompany
        .save()
        .then((company) => {
          res.send({status: "Success",user: company, data: data.user});
        })
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
      let company = {};

      if (req.body.name) company.name = req.body.name;
      if (req.body.addresses) company.addresses = req.body.addresses;
      company.completedProfile = true;
      company = { $set: company }

      Company.update({ companyID: id }, company).then(() => {
        res.send(company);
      }).catch((err) => {
        console.log(err);
      })

    }
  })
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

  router.post('/verifyCategory', (req,res) => {
    const companyID = req.body.companyID;
    Company.findOne({companyID: companyID}, (err,results) => {
      if(results) {
        res.send({status: "Success"});
      }
      else{
        res.send({status: "Not found!"});
      }
    })
  })

  router.get('/getBasicProfile/:id', (req,res) => {
    const id = crypt.decrypt(req.params.id);
    Company.findOne({companyID: id}, (err,result) => {
      res.send({name: result.name, profile: result.name.charAt(0)}) //To Do: after company dashboard is ready
    })
  })
  


module.exports = router;