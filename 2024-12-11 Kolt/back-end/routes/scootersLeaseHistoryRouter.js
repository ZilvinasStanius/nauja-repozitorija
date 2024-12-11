import express from 'express';
import LeaseHistory from '../models/LeaseHistory.model.js';
import Scooter from '../models/Scooter.model.js';
const router = express.Router();

//GET SCOOTER LEASE HISTORY

router.get('/:scooterId', async (req, res) => {
  try {
    const scooterId = req.params.scooterId;
    const scooter = await Scooter.findOne({ where: { id: scooterId } });

    if (!scooter) return res.status(404).send(`Scooter not found`);

    const leaseHistory = await LeaseHistory.findAll({
      where: { scooterId: scooterId },
    });
    res.status(200).json(leaseHistory);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error trying to retrieve data');
  }
});

//CREATE SCOOTER LEASE HISTORY

// router.post('/:scooterId',async (req,res)=>{
//   try{
//     const scooterId = req.params.scooterId;
//     const scooter = await Scooter.findOne({where:{id: scooterId}});
//     if(!scooter) return res.status(404).send(`Scooter not found`);
//     const
//   }
// })

export default router;
