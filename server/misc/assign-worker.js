const workerZoneModel = require('../models/worker-zone');
const workerModel = require('../models/worker-model')


exports.assignWorker = async (serviceKeyWords, pin) => {
    global.workerArray = [];
    //let workerZone = await workerZoneModel.findOne({ pincodes: pin }, 'zoneName -_id')  // Find zone of the customer
    for (i = 0; i < serviceKeyWords.length; i++) {
        let worker = await workerModel.find({ 'address.zone': 'Zone 1', specialization: serviceKeyWords[i] }, 'workerID totalWorks -_id')
        for (j = 0; j < worker.length; j++) {
            workerArray.push(worker[j]) // save details of worker 
        }
    }

    // console.log(workerArray)

    // sort workerArray to find worker having least worker  (using quick sort)
    function quickSort(workerArray) {
        if (workerArray.length < 2) {
            return workerArray;
        }

        var pivot = workerArray[0];
        // console.log("pivot: " + pivot)
        var lesserArray = [];
        var greaterArray = [];

        for (var i = 1; i < workerArray.length; i++) {
            if (workerArray[i].totalWorks > pivot.totalWorks) {
                greaterArray.push(workerArray[i]);
            } else {
                lesserArray.push(workerArray[i]);
            }
        }
        // console.log("lesser array: " + lesserArray)
        // console.log("greater array: " + greaterArray)

        return quickSort(lesserArray).concat(pivot, quickSort(greaterArray));
    }
    var sortedArray = quickSort(workerArray)
    // console.log(sortedArray)
    return sortedArray[0].workerID
}

// ** NB: Please do not remove the console log statements in this file **
