import express from 'express';
import { checkOrderStatus } from '../controllers/status.js';

const router = express.Router();

router.route('/myorderstatus').post(checkOrderStatus);


export default router;