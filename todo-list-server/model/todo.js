const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// Define model for MongoDB collection
const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
