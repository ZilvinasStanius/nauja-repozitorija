import faker from './faker-data.js';
import Vehicle from './modules/Vehicle.model.js';
import User from './modules/User.model.js';
import express from 'express';
import UserRouter from './routes/user.route.js';
import VehicleRouter from './routes/vehicle.route.js';
const { generateNewPerson, generateNewVehicle } = faker;

User.hasMany(Vehicle, { foreignKey: 'userId' });
Vehicle.belongsTo(User, { foreignKey: 'userId' });

await Vehicle.sync({ alter: true });
await User.sync({ alter: true });

const app = express();
app.use(express.json());

app.use('/api/person', UserRouter);
app.use('/api/vehicle', VehicleRouter);

app.listen(5555, () => {
  console.log('Connected to http://localhost:5555');
});
