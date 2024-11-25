import faker from './faker-data.js';
import Vehicle from './modules/Vehicle.model.js';
import User from './modules/User.model.js';
import express from 'express';
import UserRouter from './routes/user.route.js';
import VehicleRouter from './routes/vehicle.route.js';
const { generateNewPerson, generateNewVehicle } = faker;
// foreignKey is defined for realation between tables, by default is userId
//but if we have random name like ownerId we must define the foreign Key
//in this case i dont need to add this, but for example i leaving it
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
