import express from 'express';
import * as User from '../models/User.model.js';

const router = express.Router();

// http://localhost:3000/users
router.get('/', async (req, res) => {
  const allUsers = await User.getAllUsers();
  res.status(200).send(allUsers);
});

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const selectedUser = await User.getUserById(id);
    // null, undefined yra falsy reiksmes
    if (!selectedUser) throw new Error('not found');
    res.status(200).send(selectedUser);
  } catch (err) {
    if (err.message === 'not found')
      return res.status(404).json({ message: err.message });
    else {
      return res.status(500).json({ message: 'internal server error' });
    }
  }
});

router.post('/addUser', async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email)
      return res.status(400).json({ message: 'Name and email are required' });

    const userToAdd = await User.createNewUser({ name, email });
    res.status(200).json({ message: 'User added successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json('internal server error');
  }
});
export default router;

router.put('/:id/updateUser', async (req, res) => {
  try {
    const id = req.params.id;
    const usrID = await User.getUserById(id);

    if (!usrID) return res.status(404).json({ message: 'User not found' });

    const { name, email } = req.body;
    if (!name || !email)
      return res.status(400).json({ message: 'Name and email is required' });
    const userUpdate = await User.updateUser(id, { name, email });
    res.status(200).json({ message: 'User updated' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.delete('/:id/deleteUser', async (req, res) => {
  try {
    const id = req.params.id;
    const currentUser = await User.getUserById(id);
    if (!currentUser)
      return res.status(404).json({ message: 'User not found' });
    const deleteUsr = await User.deleteUser(id);
    res.status(200).json({ message: 'User Deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});
