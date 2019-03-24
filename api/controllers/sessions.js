const url = require('url');
const njwt = require('njwt');
const validator = require('express-validator/check');

const config = require('../config');
const logs = require('../models/logs');
const users = require('../models/users');

module.exports = {
    validateCreate: validator.checkSchema({
        email: {
            isEmail: true
        },
        password: {
            isString: true
        }
    }),
    guard: (req, res, next) => {
        // Obtain compact bearer token from request header
        const compToken = req.token;
        if (!compToken) {
            return res.sendStatus(401);
        }
        // Verify and uncompress the token
        njwt.verify(compToken, config.session.key, (njwtError, token) => {
            // If token is invalid
            if (njwtError) {
                return res.sendStatus(401);
            }
            // If token is valid then obtain User from ID
            users.findOne({
                _id: token.body.sub
            }, (findError, user) => {
                if (findError || !user) {
                    return res.sendStatus(401);
                }
                // Bind User's properties to future requests
                req.authorized = {
                    id: user._id,
                    name: user.name,
                    email: user.email
                };
                next();
            });
        });
    },
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
            // If there is no existing User or User is not active
            if (!user || !user.flags.isActive) {
                return res.sendStatus(400);
            }
            // Verify the Account's password
            user.comparePassword(req.body.password, (matchError, isMatch) => {
                // If an error occured send 500 response
                if (matchError) {
                    console.error(matchError);
                    return res.sendStatus(500);
                }
                // If the passwords do not match
                if (!isMatch) {
                    return res.sendStatus(400);
                }
                // Generate a JWT as a user session token
                const token = njwt.create({
                    sub: user._id,
                    scope: 'default',
                    iss: url.format({
                        protocol: req.protocol,
                        host: req.get('host'),
                        pathname: ''
                    })
                }, config.session.key);
                token.setExpiration(
                    new Date().getTime() + config.session.lifespan
                );
                // Log event
                logs.create({
                    name: 'USER.LOGIN',
                    user: {
                        id: user._id
                    },
                    api: {
                        type: req.method.toUpperCase(),
                        url: req.originalUrl.toUpperCase()
                    }
                }, (createError, newLog) => {
                    // If an error occured send 500 response
                    if (createError || !newLog) {
                        console.log(createError);
                        return res.sendStatus(500);
                    }
                });
                // Create compact bearer token and send
                return res.status(200).json({ token: token.compact() });
            });
        });
    },
    info: (req, res) => {
        // Log event
        logs.create({
            name: 'USER.INFO',
            user: {
                id: req.authorized.id
            },
            api: {
                type: req.method.toUpperCase(),
                url: req.originalUrl.toUpperCase()
            }
        }, (createError, newLog) => {
            // If an error occured send 500 response
            if (createError || !newLog) {
                console.log(createError);
                return res.sendStatus(500);
            }
        });
        // Send authorized User's name and email with response
        return res.status(200).json({
            name: req.authorized.name,
            email: req.authorized.email
        });
    }
};
