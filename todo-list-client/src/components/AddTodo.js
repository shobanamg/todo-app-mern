import React, { useRef, useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import Timer from "./Timer";

export default function AddTodo() {
  const { handleAdd } = useContext(TodoContext);
  const todoDescRef = useRef(null);
  const todoDateRef = useRef(null);

  return (
    <>
      <p className="text-center my-8 text-gray-700 text-xl  font-bold">
        You have used {<Timer />} seconds on this Website
      </p>

      <form
        className="my-4"
        onSubmit={(e) => {
          e.preventDefault();
          handleAdd({
            description: todoDescRef.current.value,
            deadline: todoDateRef.current.value,
          });
          todoDescRef.current.value = "";
          todoDateRef.current.value = "";
        }}
      >
        <div className="flex items-center">
          <input
            type="text"
            name="todo"
            id="todo"
            required
            className="flex-1 appearance-none border-2 border-gray-200 rounded py-2 px-4 mr-2
            leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            placeholder="Add a new Todo"
            ref={todoDescRef}
          />
          <input
            type="date"
            className="flex-1 appearance-none border-2 border-gray-200 rounded py-2 px-4 mr-2
            leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            ref={todoDateRef}
            required
            min={new Date().toISOString().split("T")[0]}
          />
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
}
