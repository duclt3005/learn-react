import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "all",
    priority: [],
  },
  reducers: {
    searchFilter: (state, action) => {
      state.search = action.payload;
    }, // => {type: "filters/searchFilter"}
    statusFilter: (state, action) => {
      state.status = action.status;
    },
  },
});

export default filterSlice;
