// Importing necessary dependencies
import { createSlice, nanoid } from "@reduxjs/toolkit";

// Function to load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("todos");
    // If no serialized state is found in localStorage, returning undefined
    if (serializedState === null) {
      return undefined;
    }
    // Parse the serialized state and return the state object
    return JSON.parse(serializedState);
  } catch (err) {
    // In case of an error during parsing, returning undefined
    return undefined;
  }
};

// Defining the initial state by loading from localStorage or using an empty array
const initialState = {
  todos: loadState() || [],
};

// Creating a Redux slice with actions and reducers
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // Action to add a new todo
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),        // Generating a unique id using nanoid
        text: action.payload, // Getting the text from the action payload
        completed: false,     // Setting completed to false for a new todo
      };
      // Adding the new todo to the beginning of the todos array
      state.todos.unshift(todo);
      // Saving the updated state to localStorage
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },

    // Action to remove a todo by id
    removeTodo: (state, action) => {
      // Filtering out the todo with the specified id
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      // Saving the updated state to localStorage
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },

    // Action to replace all todos with a new set of todos
    changeTodo: (state, action) => {
      // Setting the todos array to the new array from the action payload
      state.todos = action.payload;
      // Saving the updated state to localStorage
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

// Exporting individual actions and the reducer for use in the application
export const { addTodo, removeTodo, changeTodo } = todoSlice.actions;
export default todoSlice.reducer;
