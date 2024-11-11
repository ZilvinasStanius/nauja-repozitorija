import {
  addUser,
  deleteUserById,
  getAllUsers,
  getUserById,
  updateUserById,
} from './repository.js';
//kad importuot visas funkcijas
// import * as repository from './repository.js';

// repository.getAllUsers()
const users = await getAllUsers();
console.log(users);

// const user = await getUserById(2);
// // console.log(user);

// const newUserObject = {
//   name: 'Tomas',
//   age: 29,
// };
// const newUser = await addUser(newUserObject);
// console.log(newUser);

// await deleteUserById(2);
await updateUserById(1, { age: 99, name: 'jebuaas' });
