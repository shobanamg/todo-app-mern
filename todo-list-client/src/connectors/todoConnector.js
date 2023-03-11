import api from "../axios/api";

const TODO_BASE_URL = "/todos";
export const getTodos = async () => {
  const response = await api.get(TODO_BASE_URL);

  return response.data;
};

export const addTodo = async (description, deadline) => {
  const response = await api.post(TODO_BASE_URL, description, deadline);

  return response.data;
};

export const updateTodo = async (id, todo) => {
  const response = await api.patch(`${TODO_BASE_URL}/${id}`, todo);
  return response.data;
};

export const deleteTodo = async (id) => {
  const response = await api.delete(`${TODO_BASE_URL}/${id}`);

  return response.data;
};
