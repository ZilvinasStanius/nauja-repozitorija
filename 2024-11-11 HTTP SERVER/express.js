const express = require('express');

const server = express();
// JSON parsinimas
server.use(express.json());

server.listen(8080, () => {
  console.log('Sėkmingai paleistas serveris su prievadu 8080');
});

let todos = [];

server.get('/todos', (req, res) => {
  res.status(200).send(todos);
});

server.post('/todos', (req, res) => {
  todos.push(req.body);
  res.send('OK');
});

let skaicius = 0;
server.get('/a', (req, res) => {
  skaicius++;
  res.status(404).send({ hello: 'worldas', skaicius });
});

server.post('/a', (req, res) => {
  // res.json() - metodas kuris pateikia atsakymą tik JSON formatu
  res.json('a Post');
});

server.get('/b', (req, res) => {
  res.send('b');
});
// ctrl+c sustabdyti esama serveri jei nori paleisti kita
