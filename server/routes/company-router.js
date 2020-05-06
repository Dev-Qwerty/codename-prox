const express = require('express');
const router = express.Router();
const keys = require('../config/keys');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

const poolData = {
    UserPoolId: keys.companyCognito.userPoolId,
    ClientId: keys.companyCognito.clientId
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

    const emailAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(emailData);
    const nameAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(nameData);
    const phoneAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(phoneData);

    companyPool.signUp(email, password, [emailAttribute, nameAttribute, phoneAttribute], null, (err, data) => {
        if(err) {
            console.log(err)
        }
        res.send(data);
    })
})

module.exports = router;