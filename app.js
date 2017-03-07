const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/cookies', (req, res) => {
  res.status(200);
  var json = {
    message: "Let's get cookies at lunch today."
  };
  res.send(json);
});

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(404).send({}));

module.exports = app;
