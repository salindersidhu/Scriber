const mongoose = require('mongoose');

/**
 * Define a mongoose schema representing an audit log.
 */
var schema = new mongoose.Schema({
    userID: {
        required: true,
        type: mongoose.Schema.Types.ObjectId
    },
    build: {
        required: true,
        type: String
    },
    action: {
        required: true,
        type: String
    },
    api: {
        required: false,
        type: Object
    }
});

module.exports = mongoose.model('Logs', schema);
