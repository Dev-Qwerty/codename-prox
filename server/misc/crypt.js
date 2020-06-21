const crypto = require('crypto')

exports.encrypt = text => {
    var mykey = crypto.createCipher('aes-128-cbc', 'afvbbmhghhh');
	var mystr = mykey.update(text, 'utf8', 'hex')
	mystr += mykey.final('hex');
	return mystr;
}

exports.decrypt = text => {
    var mykey = crypto.createDecipher('aes-128-cbc', 'afvbbmhghhh');
	var mystr = mykey.update(text, 'hex', 'utf8')
	mystr += mykey.final('utf8');
	return mystr;
}