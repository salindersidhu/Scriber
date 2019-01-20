const multerController = require('../controllers/multer');
const sessionsController = require('../controllers/sessions');

module.exports = (router) => {
    router
        .route('/sessions')
        /**
         * @api {get} /sessions Get Session Info
         * @apiName SessionInfoGet
         * @apiVersion 1.0.0
         * @apiGroup Sessions
         * @apiPermission auth
         * 
         * @apiHeader {String} Bearer Authentication Session token.
         * 
         * @apiSuccessExample {json} Success
         *  HTTP/1.1 200 OK
         *  {
         *      "name":  "John",
         *      "email": "john@gmail.com"
         *  }
         * 
         * @apiErrorExample {json} Auth Error
         *  HTTP/1.1 401 Unauthorized
         * @apiErrorExample {json} Server Error
         *  HTTP/1.1 500 Internal Server Error
         */
        .get(
            multerController.multiPartForm,
            sessionsController.guard,
            sessionsController.info
        )
        /**
         * @api {post} /sessions Create Session Token
         * @apiName CreateSessionPost
         * @apiVersion 1.0.0
         * @apiGroup Sessions
         * @apiPermission none
         * 
         * @apiParam {String} email The user account's email.
         * @apiParam {String} password The user account's password.
         * 
         * @apiParamExample {json} Input
         *  {
         *      "email":    "john@gmail.com",
         *      "password": "helloWorld123ABC"
         *  }
         * 
         * @apiSuccessExample {json} Success
         *  HTTP/1.1 200 OK
         *  {
         *      "token": "eyJ0eXAiOi..."
         *  }
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
            sessionsController.validateCreate,
            sessionsController.create
        );
};
