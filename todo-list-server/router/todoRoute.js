const express = require("express");
const router = express.Router();
const TodoController = require("../controller/todoController");

router.get("/", TodoController.getTodos);
router.post("/", TodoController.createTodo);
router.delete("/:id", TodoController.deleteTodo);
router.patch("/:id", TodoController.updateTodo);

module.exports = router;
