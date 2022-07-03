const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    priority: String,
    timestamp: { type: Date, default: Date.now },
    dueDate: Date
},
{ collection : 'todos' });

module.exports = mongoose.model("todo", todoSchema);