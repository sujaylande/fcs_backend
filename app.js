import express from 'express';
import dotenv from 'dotenv';
import createorder from './routes/createorder.js';
import admin from './routes/admin.js';
import status from './routes/status.js';
import currentorder from './routes/currentorder.js'
import cron from 'node-cron';
import mongoose from "mongoose";


const router = express.Router();

// import cookieParser from 'cookie-parser';
import cors from 'cors';
const app = express();
dotenv.config({
    path: '.env',
});

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

//using middlewares 
//to take value from the body
app.use(express.json());
app.use('/api/v1', currentorder);
app.use('/api/v1', createorder);
app.use('/api/v1', admin);
app.use('/api/v1', status);

cron.schedule('15 00 * * *', async () => {
    try {
      await mongoose.connection.db.dropCollection('orders');
      console.log('Order collection dropped successfully!');
    } catch (error) {
      console.error('Error dropping order collection:', error);
    }
  });

export default app;