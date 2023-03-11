import React, { useState, useContext, useRef } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { _id, description, deadline, completed } = todo;
  const { handleComplete, handleDelete, handleUpdate } =
    useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdateItem = (event) => {
    event.preventDefault();
    const updatedDescription = inputRef.current.value;
    handleUpdate(_id, updatedDescription);
    setIsEditing(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("da-DK");
  };

  return (
    <li key={_id} className="flex items-center justify-between my-2 ">
      <div className="flex items-center">
        <input
          type="checkbox"
          name="completed"
          id={`completed-${_id}`}
          className="mr-2  checked:bg-green-500 leading-tight"
          checked={completed}
          onChange={(event) => handleComplete(_id, event.target.checked)}
          ref={inputRef}
        />
        {isEditing ? (
          <input
            type="text"
            defaultValue={description}
            ref={inputRef}
            required
            className="px-2 py-1 border rounded"
          />
        ) : (
          <label
            htmlFor={`completed-${_id}`}
            className={`text-gray-700 font-bold ${
              completed ? "line-through" : ""
            }`}
          >
            {description}
            <span className="text-xs text-gray-500 block">
              {formatDate(deadline)}
            </span>
          </label>
        )}
      </div>
      {isEditing ? (
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={(event) => handleUpdateItem(event)}
        >
          Update
        </button>
      ) : (
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleEdit()}
        >
          Edit
        </button>
      )}
      <button
        type="button"
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => handleDelete(_id)}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
