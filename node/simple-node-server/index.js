const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hey there!');
});

server.listen(3000);
