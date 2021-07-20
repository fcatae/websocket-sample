const WebSocket = require('ws');

const ws = new WebSocket('ws://immense-hollows-85658.herokuapp.com');

ws.on('open', function open() {
  ws.send('CONNECTED: Counter App');
});

ws.on('message', function incoming(data) {
  console.log(data);
});

  