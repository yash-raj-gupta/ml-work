const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    videoUrl: {
        type: String,
        trim: true,
        required: true,
    },
    filename: {
        type: String,
        trim: true,
    },
    duration: {
        type: Number, // Changed to store duration as a number (in seconds)
        default: 0, // Default value in case duration is not available
    },
}, { timestamps: true });

module.exports = mongoose.model('MyVideo', VideoSchema);
