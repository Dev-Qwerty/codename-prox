const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

let mainserviceModel = require("../models/mainservice-model");

// Routes

// Route for cleaning
router
  .route("/cleaning")
  .get((req, res) => {
    mainserviceModel.findOne({ serviceName: "Cleaning" }, (err, mainservice) => {
      if (err) {
        res.send("Error")
      } else {
        res.send(mainservice.subservices);
      }
    });
  })
// .post((req, res) => {
//   let mainservice = new mainserviceModel();
//   mainservice.serviceName = "Automotive";
//   mainservice.subservices = [
//     "Automotive 1",
//     "Automotive 2",
//     "Automotive 3"
//   ];
//   mainservice.save(err => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(mainservice);
//       res.send("Data stored succesfully");
//     }
//   });
// });

// Route for electronics and home appliances
router
  .route("/electronics")
  .get((req, res) => {
    mainserviceModel.findOne({ serviceName: "Electronics" }, (err, mainservice) => {
      if (err) {
        res.send("Error")
      }
      res.send(mainservice.subservices);
    });
  });

// Route for tradesman
router
  .route("/tradesman")
  .get((req, res) => {
    mainserviceModel.findOne({ serviceName: "Tradesman" }, (err, mainservice) => {
      if (err) {
        res.send("Error")
      } else {
        res.send(mainservice.subservices)
      }
    });
  });

// Route for painting
router
  .route("/painting")
  .get((req, res) => {
    mainserviceModel.findOne({ serviceName: "Painting" }, (err, mainservice) => {
      if (err) {
        res.send("Error")
      } else {
        res.send(mainservice.subservices);
      }
    });
  });

// Route for decoration
router
  .route("/decoration")
  .get((req, res) => {
    mainserviceModel.findOne({ serviceName: "Decoration" }, (err, mainservice) => {
      if (err) {
        res.send("Error")
      } else {
        res.send(mainservice.subservices);
      }
    });
  });

// Rouute for automotive
router
  .route("/automotive")
  .get((req, res) => {
    mainserviceModel.findOne({ serviceName: "Automotive" }, (err, mainservice) => {
      if (err) {
        res.send("Error")
      } else {
        res.send(mainservice.subservices)
      }
    });
  });

// Route for Gardening and Landscaping
router
  .route("/gardening")
  .get((req, res) => {
    mainserviceModel.findOne({ serviceName: "Gardening" }, (err, mainservice) => {
      if (err) {
        res.send("Error")
      } else {
        res.send(mainservice.subservices)
      }
    });
  });

// Route for Pet Grooming
router
  .route("/petgrooming")
  .get((req, res) => {
    mainserviceModel.findOne({ serviceName: "Pet Grooming" }, (err, mainservice) => {
      if (err) {
        res.send("Error")
      } else {
        res.send(mainservice.subservices)
      }
    });
  });

// Route for Pest Control
router
  .route("/pestcontrol")
  .get((req, res) => {
    mainserviceModel.findOne({ serviceName: "Pest Control" }, (err, mainservice) => {
      if (err) {
        res.send("Error")
      } else {
        res.send(mainservice.subservices)
      }
    });
  });

// Route for Construction and Civil Services
router
  .route("/construction")
  .get((req, res) => {
    mainserviceModel.findOne({ serviceName: "Construction" }, (err, mainservice) => {
      if (err) {
        res.send("Error")
      } else {
        res.send(mainservice.subservices)
      }
    });
  });

// Route for Security
router
  .route("/security")
  .get((req, res) => {
    mainserviceModel.findOne({ serviceName: "Security" }, (err, mainservice) => {
      if (err) {
        res.send("Error")
      } else {
        res.send(mainservice.subservices)
      }
    });
  });

module.exports = router;
