const net = require('net');

const client = net.createConnection(7890, 'localhost', () => {
  console.log('itiate lift off!');
});
