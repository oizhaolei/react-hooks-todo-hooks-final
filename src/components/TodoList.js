import React from "react";
import PropTypes from "prop-types";
import { Spin } from 'antd';

import Todo from "./Todo";

const TodoList = ({ todos, changeTodo, loading }) => (
  <Spin spinning={loading}>
    <ul>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => changeTodo(todo.id, {
            ...todo,
            completed: !todo.completed
          })}
        />
      ))}
    </ul>
  </Spin>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  changeTodo: PropTypes.func.isRequired
};

export default TodoList;
