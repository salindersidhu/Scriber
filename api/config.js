const crypto = require('crypto');

/* Base configuration */
const config = {
    test: {
        uri: '/',
        session: {
            lifespan: 36000000
        }
    },
    development: {
        port: 8000,
        uri: '/api/v1',
        database: {
            uri: 'mongodb://localhost:27017/scriber'
        },
        sendgrid: {
            key: ''
        },
        session: {
            lifespan: 36000000
        }
    },
    production: {
        port: 443,
        uri: '/api/v1',
        database: {
            uri: ''
        },
        sendgrid: {
            key: ''
        },
        ssl: {
            key: '',
            cert: ''
        },
        session: {
            lifespan: 36000000
        }
    }
}[process.env.NODE_ENV || 'development'];

/* Set session key for all environments */
config.session.key = crypto.randomBytes(256).toString('hex');

module.exports = config;
