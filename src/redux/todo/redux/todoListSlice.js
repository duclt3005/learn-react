const initState = [
  { id: 1, name: "Learn React", completed: false, priority: "Medium" },
  { id: 2, name: "Learn HTML", completed: false, priority: "High" },
  { id: 3, name: "Learn CSS", completed: false, priority: "Low" },
];

const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];

    default:
      return state;
  }
};

export default todoListReducer;
