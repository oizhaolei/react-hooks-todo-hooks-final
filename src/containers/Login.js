import React, { useState, useContext } from "react";
import { Button } from 'antd';
import {
  useHistory,
} from "react-router-dom";

import { login } from "../actions";
import StoreContext from "../store/StoreContext";

import authorization from '../libs/authorization';

const asyncLogin = async (dispatch, setLoading, history) => {
  try {
    setLoading(true);

    // remote login
    dispatch(login());
    authorization.login();
    history.push("/");
  } finally {
    setLoading(false);
  }
};

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [, dispatch] = useContext(StoreContext);
  const history = useHistory();

  return (
    <div>
      <Button
        loading={loading}
        onClick={e => {
          asyncLogin(dispatch, setLoading, history);
        }}>
        Login
    </Button>
    </div>
  );
};

export default Login;
