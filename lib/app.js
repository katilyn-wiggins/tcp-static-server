const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');
const fs = require('fs');

const app = net.createServer((socket) => {
  socket.on('data', (data) => {
    const request = parseRequest(data.toString());
    if (request.method === 'GET' && request.path === '/:file') {
      fs.readFile(request).then((data) =>
        socket.end(
          createResponse({
            body: data,
            contentType: 'text/html',
            status: '200 OK'
          })
        )
      );
    } else if (request.method === 'GET' && request.path === '/') {
      socket.end(
        createResponse({
          body: 'hi',
          contentType: 'text/plain',
          status: '200 OK'
        })
      );
    } else
      socket.end(
        createResponse({
          body: 'Not Found',
          status: '404 Not Found',
          contentType: 'text/plain'
        })
      );
  });
});

module.exports = app;

// } else if (request.method === 'POST' && request.path === '/echo') {
//   socket.end(
//     createResponse({
//       body: 'hi',
//       contentType: 'text/plain',
//       status: '200 OK'
//     })
//   );
