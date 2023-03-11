import { createContext, useReducer } from "react";
import { TodoReducer } from "../reducer/todoReducer";
import {
  dispatchAddTodo,
  dispatchCompleteTodo,
  dispatchDeleteTodo,
  useFetchTodos,
  dispatchUpdateTodo,
} from "./todoDispatcher";

const initialState = {
  todos: [],
};

export const TodoContext = createContext(initialState);
export const TodoContextProvider = ({ children }) => {
  const [todoList, dispatch] = useReducer(TodoReducer, initialState.todos);

  useFetchTodos(dispatch);

  const handleAdd = async (description, deadline) => {
    await dispatchAddTodo(dispatch, description, deadline);
  };

  const handleDelete = async (id) => {
    await dispatchDeleteTodo(dispatch, id);
  };

  const handleComplete = async (id, completed) => {
    await dispatchCompleteTodo(dispatch, completed, id);
  };

  const handleUpdate = async (id, description) => {
    await dispatchUpdateTodo(dispatch, id, description);
  };

  return (
    <TodoContext.Provider
      value={{
        todoList,
        handleAdd,
        handleComplete,
        handleDelete,
        handleUpdate,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
