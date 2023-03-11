import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../context/TodoContext";

const TodoList = () => {
  const { todoList } = useContext(TodoContext);
  return (
    <ul className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      {!!todoList &&
        todoList.map((todo) => <TodoItem key={todo._id} todo={todo} />)}
    </ul>
  );
};

export default TodoList;
