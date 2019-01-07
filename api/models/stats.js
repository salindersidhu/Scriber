const mongoose = require('mongoose');

/**
 * Define a mongoose schema representing application usage statistics.
 */
var schema = new mongoose.Schema({
    /* Amount of audio (in bytes) uploaded to the server */
    amountAudioUploaded: {
        default: 0,
        type: Number
    },
    /* Amount of audio (in hours) of audio transcribed */
    amountAudioTranscribed: {
        default: 0,
        type: Number
    }
});

module.exports = mongoose.model('Stats', schema);
