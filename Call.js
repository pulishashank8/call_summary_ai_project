
const mongoose = require('mongoose');

const CallSchema = new mongoose.Schema({
    transcript: String,
    summary: String,
    tasks: Array,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Call', CallSchema);
