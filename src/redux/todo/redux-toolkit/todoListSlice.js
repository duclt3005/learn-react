import { createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
  name: "todoList",
  initialState: [
    { id: 1, name: "Learn React", completed: false, priority: "Medium" },
    { id: 2, name: "Learn HTML", completed: false, priority: "High" },
    { id: 3, name: "Learn CSS", completed: false, priority: "Low" },
  ],
  reducers: {
    addTodo: (state, action) => {
      console.log(123);
      state.push(action.payload);
    }, // => {type: "todoList/addTodo"}
  },
});

export default todoListSlice;
