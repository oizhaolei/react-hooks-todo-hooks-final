import React, { useContext, Suspense } from "react";
import useSWR from 'swr'

import { changeTodo, resetTodos } from "../actions";
import TodoList from "../components/TodoList";
import { VisibilityFilters } from "../actions";
import StoreContext from "../store/StoreContext";
import fetcher from '../libs/fetch';

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

const asyncchangeTodo = async (id, data, dispatch) => {
  const json = await fetcher(`http://localhost:3001/todo/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  dispatch(changeTodo(id, json));
};

const Repos = () => {
  const [{ todos, visibilityFilter }, dispatch] = useContext(StoreContext);
  useSWR('http://localhost:3001/todo', fetcher, {
    suspense: true,
    onSuccess: (data, key, config) => {
      dispatch(resetTodos(data))
    },
  })
  return (
    <TodoList
      todos={getVisibleTodos(todos, visibilityFilter)}
      changeTodo={(id, data) => asyncchangeTodo(id, data, dispatch)}
    />
  );
}

export default () => {
  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <Repos></Repos>
      </Suspense>
    </>
  )
}