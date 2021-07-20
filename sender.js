const readline = require('readline');
const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080');

var client_name = process.argv[2] || '<default>';
console.log('Client name: ' + client_name);

ws.on('open', function open() {
  ws.send('CONNECTED: ' + client_name);
});

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
    ws.send(client_name + ': ' + line);
})  