import express from 'express';
import sequelize from './config/sequelize.js';
import mainRouter from './routes/mainRouter.js';
import Scooter from './models/Scooter.model.js';
import LeaseHistory from './models/LeaseHistory.model.js';

await Scooter.sync({ alter: true });
await LeaseHistory.sync({ alter: true });

const app = express();
app.use(express.json());

app.use('/api', mainRouter);

app.listen(3000, () => {
  console.log('Server running on http://localhost/server/');
});
