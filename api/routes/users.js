const usersController = require('../controllers/users');
const multerController = require('../controllers/multer');

module.exports = (router) => {
    router
        .route('/users')
        /**
         * @api {post} /users Create An Account
         * @apiName CreateUserPost
         * @apiVersion 1.0.0
         * @apiGroup Users
         * @apiPermission none
         * 
         * @apiParam {String} username The user account's name.
         * @apiParam {String} email The user account's email.
         * @apiParam {String} password The user account's password. Must have a
         * ZXCVBN password strength of 3 or higher.
         * 
         * @apiParamExample {json} Input
         *  {
         *      "username": "John",
         *      "email":    "john@gmail.com",
         *      "password": "helloWorld123ABC"
         *  }
         * 
         * @apiSuccessExample {json} Success
         *  HTTP/1.1 200 OK
         * 
         * @apiErrorExample {json} Request Error
         *  HTTP/1.1 400 Bad Request
         * @apiErrorExample {json} Validation Error
         *  HTTP/1.1 422 Unprocessable Entity
         * @apiErrorExample {json} Server Error
         *  HTTP/1.1 500 Internal Server Error
         */
        .post(
            multerController.multiPartForm,
            usersController.validateCreate,
            usersController.create
        );
};
