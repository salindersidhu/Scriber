const zxcvbn = require('zxcvbn');
const validator = require('express-validator/check');

const logs = require('../models/logs');
const users = require('../models/users');

module.exports = {
    validateCreate: validator.checkSchema({
        username: {
            matches: {
                options: '^(?=.*[a-zA-Z])(?=.{3,})',
                errorMessage: 'Username should be at least 3 chars long'
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
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
            }, (createUserError, newUser) => {
                // If an error occured send 500 response
                if (createUserError || !newUser) {
                    console.error(createUserError);
                    return res.sendStatus(500);
                }
                // Log event
                logs.create({
                    name: 'USER.CREATE',
                    user: {
                        id: newUser._id
                    },
                    api: {
                        type: req.method.toUpperCase(),
                        url: req.originalUrl.toUpperCase()
                    }
                },(createLogError, newLog) => {
                    // If an error occured send 500 response
                    if (createLogError || !newLog) {
                        console.log(createLogError);
                        return res.sendStatus(500);
                    }
                });
                return res.sendStatus(200);
            });
        });
    }
};
