import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import todoListReducer from "./todoListReducer";

// const rootReducer = (state = {}, action) => {
//   return {
//     filters: filterReducer(state.filters, action),
//     todoList: todoListReducer(state.todoList, action),
//   }
// };

const rootReducer = combineReducers({
  filters: filterReducer,
  todoList: todoListReducer,
});

export default rootReducer;
