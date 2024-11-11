import express from 'express';
import cors from 'cors';
import { readFromUsersFile, writeToUsersFile } from './file-io.js';
const server = express();
// middleware kuris pritaiko palaikomuma priimti JSON duomenims
server.use(express.json());

server.use(cors());

server.listen(8000, () => {
  console.log('Server running on http://localhost:8000 ');
});
const idGen = generateId(3);
// const users = [
//   { id: 1, name: 'Jonas', age: 27 },
//   { id: 2, name: 'Bobas', age: 20 },
//   { id: 3, name: 'Jobas', age: 21 },
// ];
// GET gauti visus userius
server.get('/users', (req, res) => {
  const users = readFromUsersFile();
  res.status(200).json(users);
});
// GET gauti pagal id
server.get('/users/:id', (req, res) => {
  const users = readFromUsersFile();
  // console.log(req.params);
  const id = Number(req.params.id);
  const user = users.find((usr) => usr.id === id);
  if (!user) return res.status(404).send('Naudotojas nerastas');

  res.status(200).json(user);
});

//POST nadotoju pridejimui
//<form action ="/users" method ="post"> inputas </form>

server.post('/users', (req, res) => {
  // console.log(req.body);
  const users = readFromUsersFile();
  const newUser = req.body;
  if (!newUser.name || !newUser.age) {
    return res.status(404).send('Data is not valid');
  }
  newUser.id = idGen.next().value;

  newUser.id = idGen.next().value;
  console.log(newUser);
  // pridedam naujus user prie masyvo
  users.push(newUser);
  writeToUsersFile(users);
  res.status(201).json(newUser);
});

//PUT -- atnaujinimas

server.put('/users/:id', (req, res) => {
  const users = readFromUsersFile();
  const id = Number(req.params.id);

  const foundUser = users.find((usr) => usr.id === id); // tikrina ar yra toks naudotojas su tokiu param id
  if (!foundUser) return res.status(404).send('USER NOT FOUND');
  const updateUserData = req.body; // {name?:"", age?:""}

  if (updateUserData.name) foundUser.name = updateUserData.name;
  if (updateUserData.age) foundUser.age = updateUserData.age;
  writeToUsersFile(users);
  res.status(201).json(users);
});

//DELETE
server.delete('/users/:id', (req, res) => {
  const users = readFromUsersFile();
  const id = Number(req.params.id);
  const index = users.findIndex((usr) => usr.id === id);
  if (index === -1) return res.status(404).send('USER NOT FOUND');
  users.splice(index, 1);
  writeToUsersFile(users);
  res.status(204).send('istrinta');
});

function* generateId(startId = 0) {
  while (true) {
    startId++;
    yield startId;
  }
}
