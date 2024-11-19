import connection from './mysql-connect.js';
import express from 'express';

const app = express();

app.listen(6666, () => {
  console.log('Server running on http://localhost:6666 ');
});

app.use(express.json());
/// Trying to get user by ID_______________________
app.get('/user/:id', async (req, res) => {
  const id = Number(req.params.id);

  try {
    const [rows] = await connection.query('SELECT * FROM users WHERE id = ?', [
      id,
    ]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'User Not Found' });
    }

    const user = rows[0];
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// TRYING TO DO DEPOSIT AND ADD TRANSACTION HISTORY

app.post('/user/:id/deposit', async (req, res) => {
  const id = Number(req.params.id);
  const amount = Number(req.body.amount);
  console.log('amount:', amount);
  if (!amount || amount <= 0)
    return res.status(400).json({ message: 'Invalid amount' });

  try {
    const [rows] = await connection.query('SELECT * FROM USERS WHERE id=?', [
      id,
    ]);
    if (rows.length === 0)
      return res.status(404).json({ message: 'User not found' });

    const user = rows[0];
    const newBalance = Number(user.balance) + amount;
    // newBalance = newBalance.toFixed(2);

    await connection.query('UPDATE users SET balance = ? WHERE id =?', [
      newBalance,
      id,
    ]);

    await connection.query(
      'INSERT INTO transactions (user_id, type, amount, date) VALUES (?,?,?,?)',
      [id, 'Deposit', amount, new Date()]
    );

    res.json({ message: 'Deposit succesful', newBalance });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// async function getUserById(id) {
//   const sql = `SELECT * FROM users WHERE id = ${id}`;
//   const [response] = await connection.query(sql);
//   return response;
// }

// async function addUser(user) {
//   const sql = `INSERT INTO users (username, balance) VALUES (?,?)`;
//   const response = await connection.query(sql, [user.username, user.balance]);
// }

// const newUser = { username: 'Tetras', balance: 20 };

// addUser(newUser);
// // const usr = await getUserById(2);
// // console.log(usr);
