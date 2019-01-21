const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const SALT_FACTOR = 12;

/**
 * Define a mongoose schema representing users.
 */
var schema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    flags: {
        isActive: {
            default: true,
            type: Boolean
        }
    }
});

/**
 * Define password hashing middleware.
 */
schema.pre('save', function(next) {
    /* Only hash password if it's new or has been updated */
    if (!this.isModified('password')) {
        return next();
    }
    /* Generate a random salt */
    bcrypt.genSalt(SALT_FACTOR, (saltError, salt) => {
        if (saltError) {
            return next(saltError);
        }
        /* Hash the password using the generated salt */
        bcrypt.hash(this.password, salt, null, (hashError, hash) => {
            if (hashError) {
                return next(hashError);
            }
            /* Override user's password field with the generated hash */
            this.password = hash;
            next();
        });
    });
});

/**
 * Define a method for User schema that compares passwords using bcrypt.
 */
schema.methods.comparePassword = function(password, cb) {
    bcrypt.compare(password, this.password, (err, isMatch) => {
        if (err) {
            return cb(err);
        }
        return cb(null, isMatch);
    });
};

module.exports = mongoose.model('Users', schema);
