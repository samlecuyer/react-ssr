import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { helpers } from './app/utils/serverHelpers';


const app = express();
const port = 8080;
const test = 'hello interpolated';

app.get('/', function(req, res){
  res.send(helpers.renderFullPage(test));
});

app.listen(port);

export default app;
