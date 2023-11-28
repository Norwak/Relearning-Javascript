// useless, because we have tools like Express

const http = require('http');
const fs = require('fs');

const server = http.createServer(function(request, response) {
  const url = request.url;
  console.log(url);
  if (url === '/') {
    fs.readFile('index.html', function(error, file) {
      if (error) {
        response.writeHead(500, { 'content-type': 'text/html' });
        response.end('<h1>Sorry, we have a problem</h1>');
        return;
      } else {
        response.writeHead(200, { 'content-type': 'text/html' });
        response.end(file);
        return;
      }
    });
  } else {
    response.end('Hello World');
  }
});

server.listen(5000, function() {
  console.log('Server is listening on port 5000');
});