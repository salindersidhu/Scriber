const mongoose = require('mongoose');

/**
 * Define a mongoose schema representing an audit log.
 */
var schema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    user: {
        id: {
            required: true,
            type: mongoose.Schema.Types.ObjectId
        }
    },
    api: {
        type: {
            required: true,
            type: String
        },
        url: {
            required: true,
            type: String
        }
    },
});

module.exports = mongoose.model('Logs', schema);
