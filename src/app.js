const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
console.log(__dirname);

//Rotas
const index = require('./routes/index');
const calcRoute = require('./routes/calcRoute');
const app = express();

app.use(cors);
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', index);
app.use('/static', express.static(__dirname + '/public'));
app.use('/calc', calcRoute);

module.exports = app;