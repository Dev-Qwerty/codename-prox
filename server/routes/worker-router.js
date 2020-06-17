const express = require('express');
const router = express.Router();
const keys = require('../config/keys');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const Worker = require('../models/worker-model');
const mainserviceModel = require('../models/mainservice-model');
const subserviceModel = require('../models/subservice-model');
const workOrderModel = require('../models/order-model');
const Token = require('../models/token');

const poolData = {
	UserPoolId: keys.cognito.userPoolId || process.env['COGNITOUSERPOOLID'],
	ClientId: keys.cognito.clientId || process.env['COGNITOCLIENTID']
}

const workerPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

router.post('/signup', (req, res) => {
	const { email, password, phoneNo } = req.body;

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
		Value: 'Worker'
	}

	const emailAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(emailData);
	const phoneAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(phoneData);
	const categoryAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(categoryData);

	workerPool.signUp(email, password, [emailAttribute, phoneAttribute, categoryAttribute], null, (err, data) => {
		if (err) {
			console.log(err)
		}
		const workerID = data.userSub;
		const newWorker = new Worker({
			email,
			phoneNo,
			workerID
		})
		newWorker
			.save()
			.then((worker) => {
				res.send({ status:"Success",user: worker, data: data.user});
			})
			.catch(error => console.log(error))
	})

})

router.post('/completeProfile/:id', (req, res) => {
	const t = req.body.token;
	Token.findOne({token: t}, (err,result) => {
		if(result.length == 0) {
			res.send({status: "Error!", code: "Invalid token!"});
		}
		else {
			const id = req.params.id;
			let worker = {};
			worker.name = req.body.name;
			worker.workerType = req.body.type;
			worker.companyID = req.body.companyID;
			worker.specialization = req.body.specialization;
			worker.address = req.body.address;
			worker.service = req.body.service;
			worker.completedProfile = true;
			worker = { $set: worker };

			Worker.update({ workerID: id }, worker).then(() => {
				res.send({ status: "Success!", worker: worker });
			})


		}
	})
	
})

// fetch tags while worker signup
router.get('/fetchtags', async (req, res) => {
	const t = req.body.token;
	let result = await Token.findOne({token: t});
	console.log(result);
		if(result == null) {
			res.send({status: "Error!", code: "Invalid token!"});
		}
		else {
			service = req.query.service
			let tags = []
			let serviceID = await mainserviceModel.findOne({ serviceName: service }, '_id') // fetch id of mainservice
			let subservice = await subserviceModel.find({ mainserviceID: serviceID._id }, 'name categories.category -_id') // fetdh subservice name and category names of corresponding mainservice
			for (i = 0; i < subservice.length; i++) {
				tags.push(subservice[i].name); // save name of subservice
				if (subservice[i].categories) {
					// console.log(subservice[i].name)
					// console.log(subservice[i].categories)
					if (service != "Cleaning") {
						for (j = 0; j < subservice[i].categories.length; j++)
							tags.push(subservice[i].categories[j].category) // save name of category
					}
				
				}
			}
			// TODO: if mainservice is cleaning the remoove category name from tags
			res.send({ tags })
		
		}
})

router.post('/forgotPassword', (req, res) => {
	const cognitoUser = new AmazonCognitoIdentity.CognitoUser({
		Username: req.body.email,
		Pool: workerPool
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
		Pool: workerPool
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
		Pool: workerPool
	})
	const confirmationCode = req.body.code;
	cognitoUser.confirmRegistration(confirmationCode, true, function (err, result) {
		if (err) {
			res.send({ status: "Error", error: err });
		}
		res.send({ status: "Success", res: result });
	})
})

router.post('/verifyCategory', (req, res) => {
	const workerID = req.body.workerID;
	Worker.findOne({ workerID: workerID }, (err, results) => {
		if (results) {
			res.send({ status: "Success" });
		}
		else {
			res.send({ status: "Not found!" });
		}
	})
})

// fetch myworks
router
	.route('/myworks')
	.get(async (req, res) => {
		const t = req.body.token;
		results = await Token.findOne({token: t});
			if(results == null) {
				res.send({status: "Error!", code: "Invalid token!"});				
			}
			else {
				global.totalEarning = 0
				global.todaysWork = []
				global.today = new Date().getDate().toString() + "-" + (new Date().getMonth() + 1).toString() + "-" + new Date().getFullYear().toString()
				// console.log(today)
				let id = "no worker assigned" //TODO : find workerID from cookies
				let completedWorks = await workOrderModel.find({ workerID: id, completed: true }, 'service address date totalAmount -_id')
				let upcommingWorks = await workOrderModel.find({ workerID: id, completed: false }, 'service address date totalAmount -_id')
				for (i = 0; i < upcommingWorks.length; i++) {
					if (upcommingWorks[i].date.localeCompare(today) == 0) {
						todaysWork.push(upcommingWorks[i])
					}
					totalEarning = totalEarning + parseInt(upcommingWorks[i].totalAmount)
				}
				res.json({ "completedWorks": completedWorks, "upcommingWorks": upcommingWorks, "todaysWork": todaysWork, "totalEarning": totalEarning, "totalWorks": completedWorks.length })
			}
	})

	router.get('/getBasicProfile/:id', (req,res) => {
		const id = req.params.id;
		Worker.findOne({workerID: id}, (err,result) => {
			res.send({name: result.name, type: result.specialization, rating: result.rating, location: result.address.district, profile: result.name.charAt(0)})
		})
	})

module.exports = router;