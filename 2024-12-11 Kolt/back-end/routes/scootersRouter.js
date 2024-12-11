import express from 'express';
import Scooter from '../models/Scooter.model.js';

const router = express.Router();

// GET ALL SCOOTETRS__________________
router.get('/', async (req, res) => {
  const allScooters = await Scooter.findAll();
  res.status(200).send(allScooters);
});

//GET SCOOTER BY ID______________________
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const scooter = await Scooter.findOne({ where: { id: id } });
    if (!scooter) return res.status(404).send(`Scooter not found by id:${id}`);
    res.status(200).json(scooter);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error trying to get scooter');
  }
});

//CREATE SCOOTER_________________
router.post('/', async (req, res) => {
  try {
    const body = req.body;
    const newScooter = await Scooter.create(body);
    res.status(200).json(newScooter);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error creating scooter');
  }
});

//UPDATE SCOOTER________________
router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const updatingScooter = await Scooter.findOne({ where: { id: id } });
    if (!updatingScooter)
      return res.status(404).send(`Scooter with id: ${id} not found`);

    await updatingScooter.update(updatedData);
    res.status(200).json(updatingScooter);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error trying to update scooter');
  }
});

//DELETE SCOOTER________________________
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const scooter = await Scooter.findOne({ where: { id: id } });
    if (!scooter)
      return res.status(404).send(`Scooter with id: ${id} not found`);
    Scooter.destroy({ where: { id: id } });
    res.status(200).send('Scooter was deleted!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting scooter');
  }
});

export default router;
