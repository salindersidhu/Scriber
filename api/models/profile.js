const mongoose = require('mongoose');

/**
 * Define a mongoose schema representing user profiles.
 */
var schema = new mongoose.Schema({
    userID: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
    }
});

module.exports = mongoose.model('Profiles', schema);
