import sequelize from '../config/sequelize.js';
import { DataTypes } from 'sequelize';

const User = sequelize.define('User', {
  firstName: { type: DataTypes.STRING },
  lastName: { type: DataTypes.STRING },
  age: { type: DataTypes.INTEGER },
  gender: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  phone: { type: DataTypes.STRING },
  bio: { type: DataTypes.STRING },
  avatar: { type: DataTypes.STRING },
});

export default User;
