import express from 'express';

const app = express();
const port = 8080;

app.get('/', function(req, res){
  res.send('hello from es6 node!');
});

app.listen(port);

export default app;
