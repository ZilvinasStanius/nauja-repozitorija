import db from '../config-db.js';

export async function getAllUsers() {
  const selectQuery = `SELECT * FROM users`;
  const result = await db.all(selectQuery);
  return result;
}
export async function getUserById(id) {
  const selectQuery = `SELECT * FROM users WHERE id = ${id}`;
  const result = await db.get(selectQuery);
  return result;
}

export async function createNewUser(user) {
  const addQuery = `INSERT into users(name, email) VALUES (?, ?)`;
  const result = await db.run(addQuery, [user.name, user.email]);
  return result;
}

export async function updateUser(id, updatedFields) {
  // 'name = ?, email = ?'
  const updatingFieldsStr = Object.keys(updatedFields)
    .map((key) => `${key} = ?`)
    .join(', ');
  const paramsArray = Object.keys(updatedFields).map(
    (key) => updatedFields[key]
  ); //[justinas, justinas@mail.lt]
  const query = `UPDATE users SET ${updatingFieldsStr} WHERE id = ?`;
  console.log(query);

  const result = await db.run(query, [...paramsArray, id]);

  return result;
}

export async function deleteUser(id) {
  const query = `DELETE FROM users WHERE id = ?`;
  const result = await db.run(query, [id]);
  return result;
}
