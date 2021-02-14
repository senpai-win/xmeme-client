const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
	return res.send('pong');
   });

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('*', (req,res) =>{
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
	});

app.listen(PORT);