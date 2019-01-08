const zxcvbn = require('zxcvbn');
const multer  = require('multer');
const validator = require('express-validator/check');

const users = require('../models/users');

module.exports = {
    multiPartForm: multer().none(),
    validateCreate: validator.checkSchema({
        name: {
            matches: {
                options: '^(?=.*[a-zA-Z])(?=.{3,})',
                errorMessage: 'Name should be at least 3 chars long'
            }
        },
        email: {
            isEmail: true
        },
        password: {
            custom: {
                options: v => zxcvbn(v).score >= 3,
                errorMessage: 'Password zxcvbn score should be at least 3'
            }
        }
    }),
    create: (req, res) => {
        // If validation errors occured in this request
        const validateErrors = validator.validationResult(req);
        if (!validateErrors.isEmpty()) {
            return res.status(422).send({ errors: validateErrors.array() });
        }
        users.findOne({
            email: req.body.email
        }, (findError, user) => {
            // If an error occured send 500 response
            if (findError) {
                console.error(findError);
                return res.sendStatus(500);
            }
            // If an existing User with matching email was found
            if (user) {
                return res.sendStatus(400);
            }
            // Create a new User
            users.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            }, (createError, newUser) => {
                // If an error occured send 500 response
                if (createError || !newUser) {
                    console.error(createError);
                    return res.sendStatus(500);
                }
                return res.sendStatus(200);
            });
        });
    }
};
