const url = require('url');
const crypto = require('crypto');

const RAND_STR_256 = crypto.randomBytes(256).toString('hex');

module.exports = {
    TotalTime: (n) => {
        return new Date().getTime() + n;
    },
    ServerURL: (req) => {
        return url.format({
            protocol: req.protocol,
            host: req.get('host'),
            pathname: ''
        });
    },
    SessionSignKey: () => {
        return RAND_STR_256;
    }
};
