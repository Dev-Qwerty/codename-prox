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

router.post('/login', (req, res) => {
	const LoginData = {
	  Username: req.body.username,
	  Password: req.body.password
	}
	const AuthenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(LoginData);
  
	const UserData = {
	  Username: req.body.username,
	  Pool: companyPool
	}
  
	const cognitoUser = new AmazonCognitoIdentity.CognitoUser(UserData);
	cognitoUser.authenticateUser(AuthenticationDetails, {
	  onSuccess: data => {
		const username = encrypt(data.idToken.payload.sub);
		const pidToken = encrypt(Math.random().toString(36).slice(2)); 
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
			  res.send({ status: "Success", jwt: pidToken, username: username, token: token });
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
			  res.send({status: "Success", jwt: pidToken, username: username, t: t});
			})
		  }
		})
		
	  },
	  onFailure: err => {
		res.send(err.code);
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


module.exports = router;