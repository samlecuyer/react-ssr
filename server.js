import express from 'express';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import playlistApp from './app/reducers/index';
import App from './app/containers/App';

const app = express();
const port = 8080;

app.use(handleRender);

function handleRender(req, res){
  const store = createStore(playlistApp);
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )
  const initialState = store.getState();

  res.send(renderFullPage(html, initialState));
}

function renderFullPage(html, initialState){
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>YouTube Playlist</title>
    </head>
    <body>
      <div id='app'>${html}</div>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
      </script>
      <script src='/dist/bundle.js'></script>
    </body>
    </html>
  `
}

app.listen(port);

export default app;
