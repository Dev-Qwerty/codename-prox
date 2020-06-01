const express = require('express');
const router = express.Router();

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
  