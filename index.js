const WebSocket = require('ws');
const express = require('express');

const PORT = process.env.PORT || 8080;
const INDEX = '/index.html';

const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws, req) {
  console.log(req.url)
  console.log(req.headers)
  ws.on('message', function incoming(message) {
    broadcast(message);
    console.log('%s', message);    
  });  

  var counter = 1;

  setInterval(() => {
    ws.send(counter);
    counter = counter + 1;
  }, 1000);

});

function broadcast(message) {
    wss.clients.forEach( (client) => {        
        client.send(message);
    })
}
