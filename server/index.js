const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');
const logger = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const bearerToken = require('express-bearer-token');

const app = express();
const router = express.Router();
const routes = require('./routes/');
const config = require('./config.json')[process.env.NODE_ENV || 'development'];

/* Configure Database connection */
mongoose.connect(config.database.uri, {useNewUrlParser: true});
mongoose.connection.on('error', console.error.bind(console, 'mongoose error:'));

/* Set keyword variables */
app.set('port', config.port);

/* Configure middleware */
app.use(logger('dev'));
app.use(bearerToken());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '../dist')));

/* Configure API endpoints */
routes(router);
app.use('/api/v1', router);

/* Create http or https server based on environment */
const server = process.env.NODE_ENV === 'production' ?
    https.createServer({
        key: fs.readFileSync(config.ssl.key),
        cert: fs.readFileSync(config.ssl.cert)
    }, app) :
    http.createServer(app);

/* Start server */
server.listen(config.port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Event listener for server "error" event. 
 *
 * @param {object} error - Error event
 */
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const port = app.get('port');
    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
    /* Handle specific listen errors with friendly messages */
    switch (error.code) {
    case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
    case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
    default:
        throw error;
    }
}

/**
 * Event listener for server "listening" event.
 */
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    console.log('Listening on ' + bind);
}
