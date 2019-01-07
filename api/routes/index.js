const users = require('./users');

module.exports = (router) => {
    users(router);
    /* Generic catch all route for invalid endpoints */
    router.use((req, res) => {
        res.sendStatus(404);
    });
};
