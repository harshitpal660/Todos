import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSprings, animated } from "react-spring";
import { changeTodo } from "../Reducers/todo/todoSlice";
import TodoItem from "./TodoItem";

// Todos component for rendering the list of todos
function Todos() {
  // Retrieving todos from the Redux store
  const todos = useSelector((state) => state.todos);
  // Redux dispatch function
  const dispatch = useDispatch();

  // Function to move a todo to the last position when clicked
  const moveToLast = (index) => {
    // Checking if the todo is already completed, if so, return
    if (todos[index].completed) {
      return;
    }

    // Updating the todos array to move the selected todo to the last position
    const updatedTodos = [
      ...todos.slice(0, index),
      ...todos.slice(index + 1),
      { ...todos[index], completed: true },
    ];

    // Dispatching the action to update the todos in the Redux store
    dispatch(changeTodo(updatedTodos));
  };

  // Animations for todo items using react-spring useSprings
  const springs = useSprings(
    todos.length,
    todos.map((_, index) => ({
      opacity: 1,
      transform: `translateY(${index * 50}px)`, // Adjust the translateY value as needed
    }))
  );

  // Render the Todos component
  return (
    <>
      {/* Map through the springs and render animated TodoItem components */}
      {springs.map((props, index) => (
        <animated.div
          key={index}
          style={{ ...props, cursor: 'pointer' }}
        >
          {/* Rendering TodoItem component with todo details */}
          <TodoItem todo={todos[index]} moveToLast={moveToLast} index={index} />
        </animated.div>
      ))}
    </>
  );
}

export default Todos;
