import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filterSlice";
import todoListSlice from "./todoListSlice";

const store = configureStore({
  reducer: {
    filters: filterSlice.reducer,
    todoList: todoListSlice.reducer,
  },
});

export default store;