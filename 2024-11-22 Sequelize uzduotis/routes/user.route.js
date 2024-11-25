import express from 'express';
import User from '../modules/User.model.js';
import faker from '../faker-data.js';
import Vehicle from '../modules/Vehicle.model.js';
const { generateNewPerson } = faker;

const router = express.Router();

//Get router for get all users check if has vehicles and give users with vehicels
router.get('/', async (req, res) => {
  //Query parameters
  const { hasVehicleCount, vehicles } = req.query;
  try {
    //Checking the  hasVehicleCount route
    if (hasVehicleCount) {
      if (!Number(hasVehicleCount))
        return res
          .status(400)
          .json({ message: 'hasVehicleCount must be a number' });
      //searching users that has vehicles required true gives only those users with vehicles
      const userWithVehicles = await User.findAll({
        include: { model: Vehicle, required: true },
      });
      //checking if there is vehicles
      const filteredUser = userWithVehicles.filter(
        (user) => user.vehicles.length === Number(hasVehicleCount)
      );
      if (filteredUser.length === 0)
        return res
          .status(404)
          .json({ message: 'User with this vehicle count not found' });

      return res.status(200).send(filteredUser);
    }
    //      giving user with vehicles if ?vehicles=yes
    if (vehicles === 'yes') {
      const usersWhoHasVehicles = await User.findAll({
        include: {
          model: Vehicle,
          //it gives back only users who has atleast one vehicle
          required: true,

          attributes: ['make', 'model', 'type', 'color', 'fuel'],
        },
      });
      return res.status(200).send(usersWhoHasVehicles);
    }
    // Giving all users if no query parameters have been passed
    const allUsers = await User.findAll();
    res.status(200).send(allUsers);
  } catch (err) {
    console.error(err);
    res.status(500).send('internal server error');
  }
});

// User  find by his ID
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const allUsers = await User.findOne({ where: { id: id } });
  if (!allUsers) return res.status(404).send('User not found');
  res.status(200).send(allUsers);
});

// User create
router.post('/', async (req, res) => {
  const body = req.body;
  const newUserResponse = await User.create(body);
  res.status(200).send(newUserResponse);
});

// User bulk create
router.post('/auto/:count?', async (req, res) => {
  let count = +req.params.count;
  if (!count || count <= 0 || count > 50) {
    count = 1;
  }
  const people = Array.from({ length: count }, () => generateNewPerson());
  const createdPeople = await User.bulkCreate(people);
  res.status(200).send(createdPeople);
});

// Delete user
router.delete('/:id', async (req, res) => {
  const id = +req.params.id;
  const findUser = await User.findOne({ where: { id: id } });
  if (!findUser) return res.status(404).send('User not found');
  User.destroy({ where: { id: id } });
  res.status(200).send('User Delete Successful');
});

export default router;
