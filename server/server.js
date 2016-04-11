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
import configureStore from './../common/store/configureStore';
import youtube from './helpers/youtube';

const app = new Express();
const port = 8080;

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use(setHeaders);
app.use('/', Express.static(__dirname + '/../common'));

//-----------------------------------------------------------------------------------
// ROUTES
app.get('/', function(req,res){
  youtube('Elton John').then(function(result){
    return JSON.parse(result);
  }).then(function(data){
    handleRender(req, res, data.items);
  });
});

app.get('/api/artists/*', function(req, res){
  let artist = req.params[0];

  youtube(artist).then(function(result){
    return JSON.parse(result);
  }).then(function(data){
    res.json(data.items);
  });
});

//-----------------------------------------------------------------------------------
function handleRender(req, res, data) {
    const initialState = {
      playlistReducer: {
        artists: ['Elton John', 'Stevie Wonder', 'Frank Sinatra', 'Louis Armstrong', 'Lil Wayne'],
        currentArtist: 'Elton John',
        videos: data,
        isFetching: true
      }
    };
    const store = configureStore(initialState);
    const html = renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const finalState = store.getState();

    res.send(renderFullPage(html, finalState));
}

function renderFullPage(html, clientInitialState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>YouTube Playlist</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
        <link href='https://fonts.googleapis.com/css?family=Megrim|Roboto+Slab:400,700' rel='stylesheet' type='text/css'>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(clientInitialState)}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
  `
}

function setHeaders(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
}
//-----------------------------------------------------------------------------------

app.listen(port);
