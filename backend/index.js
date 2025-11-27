import express from 'express';
import dotenv from 'dotenv';

import cors from 'cors';
import path from 'path';
import authRoutes from './Router/AuthRoute.js';
import empRoutes from './Router/EmployeeRoute.js';
import { errorHandler } from './Middleware/error.js';
import connectDB from './lib/db.js';


dotenv.config();
const app = express();
app.use(cors(
    { origin: process.env.CLIENT_URL || 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials:true,
     }

));
app.use(express.json());
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

app.use('/api/auth', authRoutes);
app.use('/api/employees', empRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
connectDB()
  .then(()=> app.listen(PORT, ()=> console.log(`Server on ${PORT}`)))
  .catch(err=> console.error(err));
