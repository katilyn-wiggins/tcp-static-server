const http = require('http');
const app = require('./lib/app');

http.createServer((req, res) => {
  res.end('hello');
});
app.listen(7891);
