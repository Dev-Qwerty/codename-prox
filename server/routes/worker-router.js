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
    const { name, password, workerType, companyID, specialization, otherAreas, phoneNo, email } = req.body;
    let address = req.body.address;
    address = JSON.stringify(address);
    const nameData = {
        Name: 'given_name',
        Value: name
    }
    const typeData = {
        Name: 'custom:worker_type',
        Value: workerType
    }
    const specializationData = {
        Name: 'custom:specialization',
        Value: specialization
    }
    let otherData = {}
    if(otherAreas==null) {
        otherData = {
            Name: 'custom:other_areas',
            Value: null
        }
    }
    else {
        otherData = {
            Name: 'custom:other_areas',
            Value: otherAreas
        }
    }
    const phoneData = {
        Name: 'phone_number',
        Value: phoneNo
    }
    let companyData = {}
    if( companyID!=null ) {
        companyData = {
            Name: 'custom:company_ID',
            Value: companyID
        }
    }
    else {
        companyData = {
            Name: 'custom:company_ID',
            Value: null
        }
    }
    const emailData = {
        Name: 'email',
        Value: email
    }

    const addressData = {
        Name: 'custom:address',
        Value: address
    }

    const emailAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(emailData);
    const nameAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(nameData);
    const typeAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(typeData);
    const specializationAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(specializationData);
    const otherAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(otherData);
    const phoneAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(phoneData);
    const companyAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(companyData);
    const addressAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(addressData);

    workerPool.signUp(email, password, [emailAttribute, nameAttribute, typeAttribute, specializationAttribute, otherAttribute, phoneAttribute, companyAttribute, addressAttribute], null, (err, data) => {
        if(err) {
            console.log(err)
        }
        res.send(data);
    })
})


module.exports = router;

