module.exports = (router) => {
    /* Generic catch all route for invalid endpoints */
    router.use((req, res) => {
        res.sendStatus(404);
    });
};
