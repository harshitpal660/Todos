import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Reducers/todo/todoSlice";

// AddTodo component for adding new todos
function AddTodo() {
  // State to manage the input value
  const [input, setInput] = useState("");
  // Redux dispatch function
  const dispatch = useDispatch();

  // Event handler when the "Add Todo" button is clicked
  const addTodoHandler = (e) => {
    e.preventDefault();
    // Checking if the input is not empty before dispatching the action
    if (input === "") {
      return;
    }
    // Dispatching the addTodo action with the input value
    dispatch(addTodo(input));
    // Clearing the input after adding the todo
    setInput("");
  };

  // Event handler when the Enter key is pressed
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // Checking if the input is not empty before dispatching the action
      if (input === "") {
        return;
      }
      // Dispatching the addTodo action with the input value
      dispatch(addTodo(input));
      // Clearing the input after adding the todo
      setInput("");
    }
  };

  // Rendering the AddTodo form
  return (
    <form onSubmit={addTodoHandler} className="space-x-3 flex flex-nowrap justify-center">
      {/* Input field for entering todo */}
      <input
        type="text"
        className="text-white bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onKeyDown={handleKeyPress}
        onChange={(e) => setInput(e.target.value)}
      ></input>

      {/* Button to submit the todo */}
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
