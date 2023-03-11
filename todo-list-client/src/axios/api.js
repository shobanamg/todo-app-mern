import React from "react";
import axios from "axios";

axios.defaults.headers.common["Content-Type"] = "application/json";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.response.use(
  (response) => {
    console.log("Successful request:", response);
    return response;
  },
  (error) => {
    console.error("Error:", error);
    throw error;
  }
);

export default api;
