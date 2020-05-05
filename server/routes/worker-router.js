const express = require('express');
const router = express.Router();
const keys = require('../config/keys');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

const poolData = {
    UserPoolId: keys.workerCognito.userPoolId,
    ClientId: keys.workerCognito.clientId
}

const workerPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

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

    const emailAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(emailData);
    const nameAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(nameData);
    const phoneAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(phoneData);

    workerPool.signUp(email, password, [emailAttribute, nameAttribute, phoneAttribute], null, (err, data) => {
        if(err) {
            console.log(err)
        }
        res.send(data);
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
        Pool: workerPool
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
          console.log(err);
        },
      });
})

router.post('/completeProfile', (req,res) => {
    let editedInfo = {};
    editedInfo['custom:worker_type'] = req.body.worker_type;
    if(req.body.company_ID) editedInfo['custom:company_ID'] = req.body.company_ID;
    editedInfo['custom:specialization'] = req.body.specialization;
    if(req.body.other_areas) editedInfo['custom:other_areas'] = req.body.other_areas;
    editedInfo['address'] = JSON.stringify(req.body.address);
    //updateUserInfo(editedInfo);
    let attributes = [];
    for(i in editedInfo) {
        const attrib_data = {
            Name: i,
            Value: editedInfo[i]
        }
        const attrib = new AmazonCognitoIdentity.CognitoUserAttribute(attrib_data);
        attributes.push(attrib);
    }
    const currentUser = workerPool.getCurrentUser();
    currentUser.getSession(function(err,result) {
        if(result) {
            currentUser.updateAttributes(attributes, function(err,results) {
                if(err) {
                    console.log(err)
                }
                res.send(results);
            })
        }
        if(err) {
            console.log(err);
        }
    })
    
})

module.exports = router;