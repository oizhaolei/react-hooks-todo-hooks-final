let nextTodoId = 1;
export const resetTodos = data => {
  nextTodoId = data.length;
  return {
    type: "RESET_TODOS",
    data,
  };
};

export const addTodo = text => ({
  type: "ADD_TODO",
  id: ++nextTodoId,
  text
});

export const setVisibilityFilter = filter => ({
  type: "SET_VISIBILITY_FILTER",
  filter
});

export const changeTodo = (id, data) => ({
  type: "CHANGE_TODO",
  id, 
  data,
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};
