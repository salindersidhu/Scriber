const users = require('./users');
const sessions = require('./sessions');

module.exports = (router) => {
    users(router);
    sessions(router);
    /* Generic catch all route for invalid endpoints */
    router.use((req, res) => {
        res.sendStatus(404);
    });
};
