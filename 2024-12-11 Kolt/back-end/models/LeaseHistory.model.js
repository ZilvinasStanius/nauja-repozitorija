import sequelize from '../config/sequelize.js';
import { DataTypes } from 'sequelize';

const LeaseHistory = sequelize.define('LeaseHistory', {
  startingRideKm: { type: DataTypes.FLOAT },
  endingRideKm: { type: DataTypes.FLOAT },
  startingLeaseDate: { type: DataTypes.DATE },
  endingLeaseDate: { type: DataTypes.DATE },
  leasingPrice: { type: DataTypes.FLOAT },
  city: { type: DataTypes.STRING },
});

export default LeaseHistory;
