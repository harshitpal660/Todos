// Importing necessary dependencies
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Reducers/todo/todoSlice";

// Configuring the Redux store
export const store = configureStore({
  // Specifying the root reducer for the store
  reducer: todoReducer,
});
