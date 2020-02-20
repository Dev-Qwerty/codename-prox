const mongoose = require('mongoose');
const keys = require('./keys');

// connect to mongodb atlas
mongoose.connect('mongodb://localhost:27017/codename', {useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

// check connection
db.on('open', () => {
    console.log('Connected');
});

// check for db error
db.on('error', (err) => {
    console.log(err);
});