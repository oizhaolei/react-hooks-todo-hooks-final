const todos = (state = [], action) => {
  switch (action.type) {
    case "RESET_TODOS":
      return [
        ...action.data,
      ];
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case "CHANGE_TODO":
      return state.map(
        todo =>
          todo.id === action.id ? { ...action.data } : todo
      );
    default:
      return state;
  }
};

export default todos;
