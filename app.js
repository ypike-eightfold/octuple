const express = require('express');
const open = require('open');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/')));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
}).listen(3000);

const start = async function() {
    await open('http://localhost:3000/');
}

start();