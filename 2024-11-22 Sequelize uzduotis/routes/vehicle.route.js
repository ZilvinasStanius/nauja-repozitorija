import express from 'express';
import Vehicle from '../modules/Vehicle.model.js';
import faker from '../faker-data.js';
import User from '../modules/User.model.js';
import { tr } from '@faker-js/faker';
const { generateNewVehicle } = faker;

const router = express.Router();

// All vehicles
router.get('/', async (req, res) => {
  const allVehicles = await Vehicle.findAll();
  res.status(200).send(allVehicles);
});

// Vehicle pagal ID
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const allVehicles = await Vehicle.findOne({ where: { id: id } });
  if (!allVehicles) return res.status(404).send('Vehicle not found');
  res.status(200).send(allVehicles);
});

// Vehicle create manual
router.post('/', async (req, res) => {
  const body = req.body;
  const newVehicleResponse = await Vehicle.create(body);
  res.status(200).send(newVehicleResponse);
});

router.post('/auto', async (req, res) => {
  const { count, userId } = req.query;

  const vehicles = Array.from({ length: count }, () =>
    generateNewVehicle(userId)
  );
  const createdCars = await Vehicle.bulkCreate(vehicles);
  res.status(200).send(createdCars);
});
// Vehicle bulk create
router.post('/auto/:count?', async (req, res) => {
  let count = +req.params.count;
  if (!count || count <= 0 || count > 50) {
    count = 1;
  }
  const vehicles = Array.from({ length: count }, () => generateNewVehicle());
  const createdVehicles = await Vehicle.bulkCreate(vehicles);
  res.status(200).send(createdVehicles);
});

// Delete vehicle
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const findVehicle = await Vehicle.findOne({ where: { id: id } });
  if (!findVehicle) return res.status(404).send('Vehicle not found');
  Vehicle.destroy({ where: { id: id } });
  res.status(200).send('User Delete Successful');
});

export default router;
