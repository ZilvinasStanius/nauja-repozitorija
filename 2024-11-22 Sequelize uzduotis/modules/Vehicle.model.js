import sequelize from '../config/sequelize.js';
import { DataTypes } from 'sequelize';

const Vehicle = sequelize.define('vehicle', {
  make: { type: DataTypes.STRING },
  model: { type: DataTypes.STRING },
  type: { type: DataTypes.STRING },
  color: { type: DataTypes.STRING },
  fuel: { type: DataTypes.STRING },
  vin: { type: DataTypes.STRING },
  registrationNumber: { type: DataTypes.STRING },
});
// User.hasMany(Vehicle, { foreignKey: 'userId' });
// Vehicle.belongsTo(User, { foreignKey: 'userId' });
export default Vehicle;
