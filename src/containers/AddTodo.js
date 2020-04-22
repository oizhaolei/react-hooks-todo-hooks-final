import React, { useContext } from "react";

import { addTodo } from "../actions";
import StoreContext from "../store/StoreContext";
import fetcher from '../libs/fetch';

const asyncAddTodo = async (text, dispatch) => {
  const json = await fetcher('http://localhost:3001/todo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
      id: 11,
      text,
      completed: false,
     })
  });

  dispatch(addTodo(json));
};

const AddTodo = () => {
  let input;
  const [, dispatch] = useContext(StoreContext);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          asyncAddTodo(input.value.trim(), dispatch);
          input.value = "";
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
