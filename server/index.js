const express = require('express');
const app = express();
const constrollers = require('./controllers');

const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');

app.use(bodyParser.json()); //middleware data parsing
app.use(morgan('tiny')); //middleware logging

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/movies', constrollers.movies.get);
app.post('/movies', constrollers.movies.post);
app.get('/load', constrollers.load.get);


app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });




