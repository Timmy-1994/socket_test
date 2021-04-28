const express = require('./node_modules/express');
const app = express();
const http = require('http').Server(app);
const path = require('path')

app.use('/', express.static('static'));

http.listen(5000, ()=>console.log('listening on *:5000'));

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3001 });

wss.on('connection', function connection(ws) {
  
  console.log('[ connection success ]')

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});