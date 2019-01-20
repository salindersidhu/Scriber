const url = require('url');

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
    }
};
