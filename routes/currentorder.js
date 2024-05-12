import express from 'express';
import { getCurrentWaiting } from '../controllers/currentWaiting.js';
import { getCurrentReady } from '../controllers/currentReady.js';
import { getCurrentDelivered } from '../controllers/currentDelevered.js';

const router = express.Router();

router.route('/currentwaiting').get(getCurrentWaiting);

router.route('/currentready').get(getCurrentReady);

router.route('/currentdelivered').get(getCurrentDelivered);

export default router;