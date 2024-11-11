import express from 'express';

const server = express();

server.listen(7999, () => {
  console.log('Server runs on http://localhost:7999');
});
const users = [
  { id: 1, name: 'Jonas', age: 27 },
  { id: 2, name: 'Bobas', age: 20 },
  { id: 3, name: 'Jobas', age: 21 },
];

server.get('/users', (req, res) => {
  res.status(200).json(users);
});

server.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(200).json(newUser);
});
