import React, { useState, useContext } from "react";
import { Button } from 'antd';

import { addTodo } from "../actions";
import StoreContext from "../store/StoreContext";
import fetcher from '../libs/fetch';

const asyncAddTodo = async (text, dispatch, setLoading) => {
  try {
    setLoading(true);

    const data = addTodo(text);
    const json = await fetcher('http://localhost:3001/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...data,
        type: undefined,
      }),
    });

    dispatch({
      ...json,
      type: data.type,
    });
  } finally {
    setLoading(false);
  }
};

const AddTodo = () => {
  const [loading, setLoading] = useState(false);
  let input;
  const [, dispatch] = useContext(StoreContext);

  return (
    <div>
      <form>
        <input ref={node => (input = node)} />
        <Button
          loading={loading}
          type="submit"
          onClick={e => {
            e.preventDefault();
            if (!input.value.trim()) {
              return;
            }
            asyncAddTodo(input.value.trim(), dispatch, setLoading);
            input.value = "";
          }}
        >
          Add Todo
        </Button>
      </form>
    </div>
  );
};

export default AddTodo;
