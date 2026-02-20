import express from 'express';
import cors from 'cors';
import appointmentsRoutes from './routes/appointments.routes.js';

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// rutas
app.use('/api', appointmentsRoutes);

export default app;