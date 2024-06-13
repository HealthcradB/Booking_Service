import express from 'express';
import bodyParser from 'body-parser';
import { medicineBookingRoutes } from './routes/medicineBookingRoutes.js';
import connectDB from './config/db.js';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', medicineBookingRoutes);

// Connect to MongoDB
connectDB();

app.listen(port, () => console.log(`Server running on port ${port}`));

export default app;
