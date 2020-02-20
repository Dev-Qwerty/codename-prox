const experss = require('express');
const router = experss.Router();

// Bring in Subservice model
let subService = require('../models/subservices');

router
    .route('/')
    .get((req, res) => {
        res.render('admin'); 
    })

// add subservices
router
    .route('/addservices')
    .post((req, res) => {
        let subservicedoc = new subService;
        subservicedoc.subserviceName = req.body.subService;
        subservicedoc.mainService = req.body.mainService;
        subservicedoc.preInspection = req.body.preInspection;
        subservicedoc.averageCost = req.body.avgCost;
        subservicedoc.averageTime = req.body.avgTime
        subservicedoc.comments = req.body.comments;

        subservicedoc.save((err) => {
            if(err){
                console.log(err);
            }else{
                console.log('Data entered succesfully');
                res.redirect('/admin');
            }
        });
    });

module.exports = router;