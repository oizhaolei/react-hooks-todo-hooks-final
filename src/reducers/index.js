import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
import account from "./account";

export default function(state = {}, action = {}) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action),
    account: account(state.account, action),
  };
}
