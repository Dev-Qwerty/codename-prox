const mongoose = require('mongoose');
const keys = require('./keys');

// connect to mongodb atlas
mongoose.connect(keys.mongodb.mongodbURI, {useNewUrlParser: true, useUnifiedTopology: false });

var db = mongoose.connection;

// check connection
db.on('open', () => {
    console.log('Connected');
});

// check for db error
db.on('error', (err) => {
    console.log(err);
});