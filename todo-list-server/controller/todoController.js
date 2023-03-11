const Todo = require("../model/todo");

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to retrieve all the todos" });
  }
};

const createTodo = async (req, res) => {
  try {
    console.log(req.body);
    const todo = new Todo(req.body);
    console.log(todo);
    const savedTodo = await todo.save();
    res.status(201).json(savedTodo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create the todo" });
  }
};

const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(todo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update the todo" });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json(todo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete the todo" });
  }
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
