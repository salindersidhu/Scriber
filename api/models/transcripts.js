const mongoose = require('mongoose');

/**
 * Define a mongoose schema representing audio transcript.
 */
var schema = new mongoose.Schema({
    userID: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
    },
    name: {
        required: true,
        type: String
    },
    status: {
        default: 0,
        type: Number
    },
    audio: {
        required: true,
        type: String
    },
    text: {
        original: [{
            word: {
                required: true,
                type: String
            },
            /* Starting position (in seconds) of the word */
            start: {
                required: true,
                type: Number
            },
            /* Ending position (in seconds) of the word */
            end: {
                required: true,
                type: Number
            }
        }],
        revised: {
            word: {
                required: true,
                type: String
            },
            /* Starting position (in seconds) of the word */
            start: {
                required: true,
                type: Number
            },
            /* Ending position (in seconds) of the word */
            end: {
                required: true,
                type: Number
            }
        }
    }
});

module.exports = mongoose.model('Transcripts', schema);
