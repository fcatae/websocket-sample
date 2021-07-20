const WebSocket = require('ws');

const PORT = process.env.PORT || 8080

const wss = new WebSocket.Server({ port: PORT });

wss.on('connection', function connection(ws) {
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
