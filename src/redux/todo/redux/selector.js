export const todoListSelector = (state) => {
  const searchFilter = searchFilterSelector(state);
  const todoRemaining = state.todoList.filter((todo) => {
    return todo.name.includes(searchFilter.search);
  });
  return todoRemaining;
};

export const searchFilterSelector = (state) => state.filters;
