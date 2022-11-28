const initState = {
  search: "",
  status: "all",
  priority: [],
};

const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case "filters/searchFilter":
      return {
        ...state,
        search: action.payload,
      };

    default:
      return state;
  }
};

export default filterReducer;
