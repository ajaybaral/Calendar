const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    category: String, // "Exam", "Submission", "Event"
    userId: String,   // ID of the user who added it
});

module.exports = mongoose.model('Task', taskSchema);
