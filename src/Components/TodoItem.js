// TodoItem.js
import React from "react";
import { useSpring, animated } from "react-spring";
import { removeTodo } from "../Reducers/todo/todoSlice";
import { useDispatch } from "react-redux";
// TodoItem component for rendering individual todo items
const TodoItem = ({ todo, moveToLast, index }) => {
  // Redux dispatch function
  const dispatch = useDispatch();

  // Define a fade-in animation
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });
  // Define a slide-in animation for marginLeft
  const slideIn = useSpring({
    marginLeft: 0,
    from: { marginLeft: -50 },
  });
  // Log the todo object to the console
  console.log(todo);

  // Render the TodoItem component
  return (
    <animated.div style={{ ...fadeIn, ...slideIn }}>
      {!todo.completed ? (
        <div className="flex justify-center flex-row">
          <div>
            <li
              style={{ minWidth: "310px", cursor: "pointer" }}
              className="todoItem mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded "
              key={todo.id}
              onClick={() => moveToLast(index)}
            >
              <div className="text-white">{todo.text}</div>
            </li>
          </div>
          <div>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white z-10 mt-4 bg-red-500 border-0 py-2 px-2 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 30 30"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M24.2,12.193,23.8,24.3a3.988,3.988,0,0,1-4,3.857H12.2a3.988,3.988,0,0,1-4-3.853L7.8,12.193a1,1,0,0,1,2-.066l.4,12.11a2,2,0,0,0,2,1.923h7.6a2,2,0,0,0,2-1.927l.4-12.106a1,1,0,0,1,2,.066Zm1.323-4.029a1,1,0,0,1-1,1H7.478a1,1,0,0,1,0-2h3.1a1.276,1.276,0,0,0,1.273-1.148,2.991,2.991,0,0,1,2.984-2.694h2.33a2.991,2.991,0,0,1,2.984,2.694,1.276,1.276,0,0,0,1.273,1.148h3.1A1,1,0,0,1,25.522,8.164Zm-11.936-1h4.828a3.3,3.3,0,0,1-.255-.944,1,1,0,0,0-.994-.9h-2.33a1,1,0,0,0-.994.9A3.3,3.3,0,0,1,13.586,7.164Zm1.007,15.151V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Zm4.814,0V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center flex-row">
          <div>
            <li
              style={{ minWidth: "310px", cursor: "pointer" }}
              className="mt-4 flex justify-between items-center bg-green-400 px-4 py-2 rounded "
              key={todo.id}
              onClick={() => moveToLast(index)}
            >
              <div className="text-white">{todo.text}</div>
            </li>
          </div>
          <div>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white z-10 mt-4 bg-red-500 border-0 py-2 px-2 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 30 30"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M24.2,12.193,23.8,24.3a3.988,3.988,0,0,1-4,3.857H12.2a3.988,3.988,0,0,1-4-3.853L7.8,12.193a1,1,0,0,1,2-.066l.4,12.11a2,2,0,0,0,2,1.923h7.6a2,2,0,0,0,2-1.927l.4-12.106a1,1,0,0,1,2,.066Zm1.323-4.029a1,1,0,0,1-1,1H7.478a1,1,0,0,1,0-2h3.1a1.276,1.276,0,0,0,1.273-1.148,2.991,2.991,0,0,1,2.984-2.694h2.33a2.991,2.991,0,0,1,2.984,2.694,1.276,1.276,0,0,0,1.273,1.148h3.1A1,1,0,0,1,25.522,8.164Zm-11.936-1h4.828a3.3,3.3,0,0,1-.255-.944,1,1,0,0,0-.994-.9h-2.33a1,1,0,0,0-.994.9A3.3,3.3,0,0,1,13.586,7.164Zm1.007,15.151V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Zm4.814,0V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      )}
    </animated.div>
  );
};

export default TodoItem;
