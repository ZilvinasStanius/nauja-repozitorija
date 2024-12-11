import sequelize from '../config/sequelize.js';
import { DataTypes } from 'sequelize';
import LeaseHistory from './LeaseHistory.model.js';

const Scooter = sequelize.define('Scooter', {
  registrationCode: { type: DataTypes.STRING },
  lastUseTime: { type: DataTypes.DATE },
  totalRide: { type: DataTypes.FLOAT },
  rideTariffPerKm: { type: DataTypes.FLOAT },
  leaseTariffPerMin: { type: DataTypes.FLOAT },
  isBusy: { type: DataTypes.BOOLEAN },
});

Scooter.hasMany(LeaseHistory);

export default Scooter;
