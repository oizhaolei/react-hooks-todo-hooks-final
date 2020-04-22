import React, { useContext, Suspense } from "react";
import useSWR from 'swr'

import { toggleTodo, resetTodos } from "../actions";
import TodoList from "../components/TodoList";
import { VisibilityFilters } from "../actions";
import StoreContext from "../store/StoreContext";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

export default function VisibleTodoList() {
  const [{ visibilityFilter }, dispatch] = useContext(StoreContext);
  const { todos } = useSWR('/api/data', fetcher, {
    suspense: true,
    onSuccess: (data, key, config) => {
      dispatch(resetTodos(data))
    },
  })
  return (
    <Suspense fallback={<div>loading...</div>}>
      <TodoList
        todos={getVisibleTodos(todos, visibilityFilter)}
        toggleTodo={id => dispatch(toggleTodo(id))}
      />
    </Suspense>
  );
}
