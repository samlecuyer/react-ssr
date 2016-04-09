import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { helpers } from './app/utils/serverHelpers';
import App from './app/containers/App';

const app = express();
const port = 8080;
const hook = renderToString(<App />);

app.get('/', function(req, res){
  res.send(helpers.renderFullPage(hook));
});

app.listen(port);

export default app;
