import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../common/reducers';
import App from '../common/containers/App';

const initialState = window.__INITIAL_STATE__;
const store = createStore(rootReducer, initialState);
const rootEl = document.getElementById('app');

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  rootEl
)
