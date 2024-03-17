const express = require('express');
const httpStatus = require('http-status');
const cors = require('cors');
const routes = require('../api/routes/v1');
const { errorHandler } = require('../api/middleware/error');
const ApiError = require('../api/utils/ApiError');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(express.static(__dirname+'/public'));

app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

app.use(errorHandler);

module.exports = app;
