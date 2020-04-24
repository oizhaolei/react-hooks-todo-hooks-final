const account = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.data;
    case "LOGOUT":
      return action.data;
    default:
      return state;
  }
};

export default account;
