const express = require('express');
const config = require('./config/mongo-connect');

const app = express();

app.get('/', (req,res) => {
    res.send("Listening on port 3000");
})

app.listen(3000);