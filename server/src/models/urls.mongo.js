const mongoose = require('mongoose');

const urlsSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    shortened_url: {
        type: String,
        required: true
    },
    visits: {
        type: Number,
        required: true
    },
    creationAttempt: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Url', urlsSchema)