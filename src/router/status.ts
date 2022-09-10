import { Router } from 'express';
import * as statusCtrl from '../controllers/statusController';

const router = Router();

router.get('/', statusCtrl.getStatus);

export default router;
