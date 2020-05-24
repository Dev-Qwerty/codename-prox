var process = require('process');

exports.uniqueOrderId = () => {
    var year = new Date().getFullYear().toString().slice(-2)
    var month = new Date().getMonth() + 1
    var date = new Date().getDate().toString()
    var time = new Date().getTime().toString().slice(-8)
    var pid = process.pid.toString().slice(-4)
    if (month <= 9) {
        month = "0" + month.toString()
    } else {
        month = month.toString()
    }

    var uOrderID = "OD" + year + month + date + time + pid;
    return uOrderID
}

exports.uniqueRequestId = () => {
    var year = new Date().getFullYear().toString().slice(-2)
    var month = new Date().getMonth() + 1
    var date = new Date().getDate().toString()
    var time = new Date().getTime().toString().slice(-8)
    var pid = process.pid.toString().slice(-4)
    if (month <= 9) {
        month = "0" + month.toString()
    } else {
        month = month.toString()
    }
    // console.log("OD" + year + month + date + time + pid)
    // console.log(("OD" + year + month + date + time + pid).length)
    var uRequestID = "RQ" + year + month + date + pid + time
    return uRequestID
}
