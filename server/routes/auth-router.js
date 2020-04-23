const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const User = require('../models/user-model');

router.post('/register', (req, res) => {
    const { email, phone, password } = req.body;
    let errors = [];
  
    if (!email || !phone || !password) {
      errors.push({ msg: 'Please enter all fields' });
    }
    if (password.length < 6) {
      errors.push({ msg: 'Password must be at least 6 characters' });
    }
  
    if (errors.length > 0) {
      res.send({"status": "error", "errors": errors})
    } else {
      User.findOne({ email: email }).then(user => {
        if (user) {
          errors.push({ msg: 'Email already exists' });
          res.send({"status": "error", "errors": errors})
        } else {
          const newUser = new User({
            email,
            phone,
            password
          });
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then(user => {
                  res.send({"status": "Success", "user": user.name, "email": user.email, "category": user.category })
                })
                .catch(err => console.log(err));
            });
          });
        }
    });
    }
});

module.exports = router;