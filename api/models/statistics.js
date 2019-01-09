const mongoose = require('mongoose');

/**
 * Define a mongoose schema representing application usage statistics.
 */
var schema = new mongoose.Schema({
    /* */
    name: {
        required: true,
        type: String,
    },
    updated: {
        required: true,
        type: Date
    },
    category: {
        type: String
    },
    data: {
        type: String
    }
});

module.exports = mongoose.model('Statistics', schema);
