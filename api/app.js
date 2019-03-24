const cors = require('cors');
const logger = require('morgan');
const express = require('express');
const bearerToken = require('express-bearer-token');

/* Configure Express app */
const app = express();
const router = express.Router();
const routes = require('./routes');

/* Configure middleware */
app.use(cors());
app.use(logger('dev'));
app.use(bearerToken());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Configure API endpoints */
routes(router);
app.use('/api/v1', router);

module.exports = app;
