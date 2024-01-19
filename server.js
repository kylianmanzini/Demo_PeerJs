const express = require('express');
const http = require('http');
const { ExpressPeerServer } = require('peer');

const app = express();
const server = http.createServer(app);

const peerServer = ExpressPeerServer(server, {
  debug: true,
});

app.use('/peerjs', peerServer);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

server.listen(8080, () => {
  console.log('Server is listening on port 8080');
});
