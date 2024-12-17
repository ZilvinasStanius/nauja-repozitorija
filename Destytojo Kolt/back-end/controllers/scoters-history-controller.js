import ScooterHistoryModel from '../models/ScooterLeaseHistoryModel.js';
import ScooterModel from '../models/ScooterModel.js';
import { ScooterLeaseHistoryCreateValidation } from '../utils/validations/ScooterLeaseHistorySchema.js';
import sequelize from '../config/sequelize.js';

export async function getAllScootersHistory(req, res) {
  const allScotersHistory = await ScooterHistoryModel.findAll();
  res.status(200).json(allScotersHistory);
}
export async function getScooterHistoryById(req, res) {
  const { id } = req.params;
  if (!id || isNaN(id))
    return res
      .status(400)
      .json({ message: 'Scooter ID was not provided or was in wrong format' });

  const foundScooterHistory = await ScooterHistoryModel.findAll({
    where: { scooterId: id },
  });
  res.status(200).json(foundScooterHistory);
}

// working our code.
export async function createScooterHistoryRecord(req, res) {
  const { id: scooterId } = req.params;
  const { city } = req.body;
  const updatedData = await sequelize.transaction(async (t) => {
    const scooter = await ScooterModel.findByPk(scooterId);

    await ScooterModel.update(
      {
        isBusy: true,
        lastUseTime: new Date(),
      },
      { where: { id: scooterId } },
      { transaction: t }
    );

    // Validacija
    const newScooterHistoryData = {
      startingRideKm: scooter.totalRide,
      city,
      scooterId,
    };

    const validationResult = ScooterLeaseHistoryCreateValidation.safeParse(
      newScooterHistoryData
    );

    if (!validationResult.success)
      return res.status(400).json({ errors: validationResult.error.issues });

    const newScooterHistory = await ScooterHistoryModel.create(
      newScooterHistoryData,
      { transaction: t }
    );

    return { scooter, leaseHistory: newScooterHistory };
  });

  res.status(201).json(updatedData);
}

// update LeaseHistory
export async function updateLeaseHistory(req, res) {
  try {
    const { id: scooterId } = req.params;
    const { endingLeaseDate, endingRideKm } = req.body;

    const updatedData = await sequelize.transaction(async (t) => {
      const scooter = await ScooterModel.findByPk(scooterId);

      if (!scooter) {
        res
          .status(404)
          .json({ message: `Scooter with ID ${scooterId} not found` });
        return;
      }

      const history = await ScooterHistoryModel.findOne({
        where: { scooterId, endingRideKm: null },
      });

      if (!history) {
        res.status(404).json({
          message: `History record for scooter ID ${scooterId} not found`,
        });
        return;
      }

      //kalkuliacijos
      const km = endingRideKm - scooter.totalRide;
      const kmPrice = scooter.rideTariffPerKm * km;
      const startDate = new Date(history.startingLeaseDate);
      const endDate = new Date(endingLeaseDate);
      const durationMs = endDate - startDate;
      const durationInMin = durationMs / (1000 * 60);
      const pricePerMin = durationInMin * scooter.leaseTariffPerMin;
      const leaseWholePrice = pricePerMin + kmPrice;

      await ScooterHistoryModel.update(
        {
          endingRideKm,
          endingLeaseDate,
          leasingPrice: leaseWholePrice,
        },
        {
          where: { id: history.id },
          transaction: t,
        }
      );

      await ScooterModel.update(
        {
          isBusy: false,
          lastUseTime: endingLeaseDate,
          totalRide: endingRideKm,
        },
        {
          where: { id: scooterId },
          transaction: t,
        }
      );
    });
    res.status(201).json(updatedData);
  } catch (error) {
    res.status(502).json({ message: `Server reload ${error}` });
  }
}

// export async function updateLeaseHistory(req, res) {
//   const { id: scooterId } = req.params;
//   const { endingLeaseDate, endingRideKm } = req.body;

//   const updatedData = await sequelize.transaction(async (t) => {
//     const scooter = await ScooterModel.findByPk(scooterId);

//     if (!scooter) {
//       throw new Error(`Scooter with ID ${scooterId} not found`);
//     }

//     const history = await ScooterHistoryModel.findOne({
//       where: { scooterId, endingRideKm: null },
//     });

//     if (!history) {
//       throw new Error(`History record for scooter ID ${scooterId} not found`);
//     }

//     //kalkuliacijos
//     const km = endingRideKm - scooter.totalRide;
//     const kmPrice = scooter.rideTariffPerKm * km;
//     const startDate = new Date(history.startingLeaseDate);
//     const endDate = new Date(endingLeaseDate);
//     const durationMs = endDate - startDate;
//     const durationInMin = durationMs / (1000 * 60);
//     const pricePerMin = durationInMin * scooter.leaseTariffPerMin;
//     const leaseWholePrice = pricePerMin + kmPrice;

//     await ScooterHistoryModel.update(
//       {
//         endingRideKm,
//         endingLeaseDate,
//         leasingPrice: leaseWholePrice,
//       },
//       {
//         where: { id: history.id },
//         transaction: t,
//       }
//     );

//     await ScooterModel.update(
//       {
//         isBusy: false,
//         lastUseTime: endingLeaseDate,
//         totalRide: endingRideKm,
//       },
//       {
//         where: { id: scooterId },
//         transaction: t,
//       }
//     );
//   });
//   res.status(201).json(updatedData);
// }
