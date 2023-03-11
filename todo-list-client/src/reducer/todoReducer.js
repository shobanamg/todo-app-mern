import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  SET_TODOS,
  UPDATE_TODO,
} from "../constants/todoActions";

export const TodoReducer = (todoList, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...todoList, action.payload];

    case DELETE_TODO:
      return todoList.filter((todo) => todo._id !== action.payload);

    case COMPLETE_TODO:
      return todoList.map((todo) => {
        if (todo._id === action.payload) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });

    case SET_TODOS:
      return action.payload;

    case UPDATE_TODO:
      const { _id } = action.payload;
      return todoList.map((todo) => {
        if (todo._id === _id) {
          console.log("todo", todo, "payload", action.payload);
          return action.payload;
        } else {
          return todo;
        }
      });

    default:
      console.log("Unknown action type in TodoReducer: ");
  }
};
