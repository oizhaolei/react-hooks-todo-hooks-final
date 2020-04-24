import React from 'react';
import { render } from 'react-dom';

import Routes from './containers/Routes';
import rootReducer from './reducers';
import Store from './store/Store';

render(
  <Store rootReducer={rootReducer}>
    <Routes />
  </Store>,
  document.getElementById('root')
);
