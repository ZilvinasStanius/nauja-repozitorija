const express = require('express');
const server = express();

const users = [];

server.use(express.json());

server.listen(8081, () => {
  console.log('Server running on 8081 port');
});

server.get('/greet', (req, res) => {
  res.send({ message: 'Hello, visitor!' });
});

server.post('/submit', (req, res) => {
  users.push(...req.body);
  //   const message = users.map((user) => `Hello ${user.name}, age ${user.age}`);
  //   res.send({ message });
  res.send({ users });
});

server.delete('/submit/:name', (req, res) => {
  const userName = req.params.name;
  const index = users.findIndex((user) => user.name === userName);
  if (index !== -1) {
    users.splice(index, 1);
    res.send({ message: `${userName} has been deleted` });
  } else {
    res.status(404).send({ message: `${userName} not found` });
  }
  console.log(index);
});

server.get('/users', (req, res) => {
  res.send(users);
});
