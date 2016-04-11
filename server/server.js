import Express from 'express';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from '../common/containers/App';
import rootReducer from './../common/reducers';
import youtube from './helpers/youtube';

const app = new Express();
const port = 8080;

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use(handleRender);

// youtube();

//-----------------------------------------------------------------------------------
function handleRender(req, res) {
    const store = createStore(rootReducer);
    const initialState = store.getState();
    const html = renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    );

    res.send(renderFullPage(html, initialState));
}

function renderFullPage(html, initialState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>YouTube Playlist</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
  `
}
//-----------------------------------------------------------------------------------
// API ROUTES
app.get('/api/artists', function(req, res){
  console.log('inside get for youtube data');
});
//-----------------------------------------------------------------------------------

app.listen(port);
