import express from 'express';
import { moveFromReadyToDelivered } from '../controllers/delivered.js';
import { moveFromWaitingToReady } from '../controllers/ready.js';
import {Auth} from '../controllers/auth.js';

const router = express.Router();

router.route('/orderready').post(moveFromWaitingToReady);

router.route('/orderdelivered').post(moveFromReadyToDelivered);
router.route('/login').post(Auth);
export default router;