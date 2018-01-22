const express = require('express');
const app = express();
const path = require('path');

app.post('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8000);