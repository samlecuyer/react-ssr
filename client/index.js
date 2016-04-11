import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import rootReducer from './../common/reducers';
import configureStore from './../common/store/configureStore';
import App from './../common/containers/App';

//Styling
import './../common/styles/styles.scss';

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);
const rootEl = document.getElementById('app');

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  rootEl
)
