import express from 'express';
import { addToWaiting } from '../controllers/createorder.js';

const router = express.Router();

router.route('/createorder').post(addToWaiting);


export default router;