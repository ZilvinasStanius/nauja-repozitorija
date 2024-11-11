const http = require('http');

http
  .createServer((request, response) => {
    console.log(request.url);
    console.log(request.mehod);

    //Endpoint /a
    if (request.url === '/a' && request.method === 'GET') {
      response.write(JSON.stringify({ data: 'A' }));
      //Endpoint /b
    } else if (request.url === '/b' && request.method === 'GET') {
      response.write(JSON.stringify({ data: 'B' }));
    } else {
      response.write('Route Not Found');
    }

    response.end();
  })
  .listen(8080, () => {
    console.log('sekmingai paleistas serveris ant porto su prievadu 8080');
  });
