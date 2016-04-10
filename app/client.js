import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import playlistApp from './reducers/index';
import App from './containers/App';

const initialState = window.__INITIAL_STATE__;
const store = createStore(playlistApp, initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
