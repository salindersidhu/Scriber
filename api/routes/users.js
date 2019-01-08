const controller = require('../controllers/users');

module.exports = (router) => {
    router
        .route('/users')
        .post(controller.multiPartForm, controller.validateCreate, controller.create);
};
