import { useEffect } from "react";
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} from "../connectors/todoConnector";
import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  SET_TODOS,
  UPDATE_TODO,
} from "../constants/todoActions";

export const useFetchTodos = (dispatch) => {
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const data = await getTodos();
        dispatch({
          type: SET_TODOS,
          payload: data,
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchTodos().then(() => {
      console.log("fetchTodos");
    });
  }, [dispatch]);
};

export const dispatchCompleteTodo = async (dispatch, completed, id) => {
  try {
    const data = await updateTodo(id, { completed: completed });
    console.log(data, "completeTodo");
    dispatch({
      type: COMPLETE_TODO,
      payload: id,
    });
  } catch (error) {
    console.error(error);
  }
};

export const dispatchDeleteTodo = async (dispatch, id) => {
  try {
    await deleteTodo(id);
    dispatch({
      type: DELETE_TODO,
      payload: id,
    });
  } catch (error) {
    console.error(error);
  }
};

export const dispatchAddTodo = async (dispatch, description, deadline) => {
  try {
    const data = await addTodo(description, deadline);
    dispatch({
      type: ADD_TODO,
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const dispatchUpdateTodo = async (dispatch, id, description) => {
  try {
    const data = await updateTodo(id, { description });
    dispatch({
      type: UPDATE_TODO,
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};
