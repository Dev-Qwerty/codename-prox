// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
const config = require('../config/keys.js')

AWS.config.update({
    region: config.sns.region,
    accessKeyId: config.sns.accessKeyId,
    secretAccessKey: config.sns.secretAccessKey
});

// Create SMS Attribute parameters
var params1 = {
    attributes: { /* required */
      'DefaultSMSType': 'Transactional', /* highest reliability */
      //'DefaultSMSType': 'Promotional' /* lowest cost */
    }
  };

// Create promise and SNS service object
var setSMSTypePromise = new AWS.SNS({apiVersion: '2010-03-31'}).setSMSAttributes(params1).promise();

// Handle promise's fulfilled/rejected states
setSMSTypePromise.then(
  function(data) {
    console.log(data);
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });



exports.sendTextMessage = (recipient,recipientDetails,workDetails) => {
  if(recipient == 'worker'){
    // Create publish parameters
    var params2 = {
      Message: `Hey ${recipientDetails.name},\nA new work has been alloted to you.\nWork: ${workDetails.mainserviceName},\nPlace: ${workDetails.place},\nDate: ${workDetails.date},\nTime: ${workDetails.time}\n\nGo to your profile to accept/decline the request`, /* required */
      PhoneNumber: '+91XXXXXXXXXX', //TODO : concat phone no. with country code
    };
  }else {
    // Create publish parameters
    var params2 = {
      Message: `Hey ${recipientDetails.name},\nThank you for using (Product name).\nOur professional ${workDetails.workerName} has been assigned for your requested work ${workDetails.work} with orderID ${workDetails.orderID}.\nOur professional will be there on ${workDetails.date} at ${workDetails.time}`, /* required */
      PhoneNumber: '+91XXXXXXXXXX', //TODO : concat phone no. with country code
    };
  }
  // Create promise and SNS service object
  var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params2).promise();

  // Handle promise's fulfilled/rejected states
  publishTextPromise.then(
  function(data) {
      console.log("MessageID is " + data.MessageId);
  }).catch(
      function(err) {
      console.error(err, err.stack);
  });

}

