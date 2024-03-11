import express from 'express';
import * as accountController from '../../controllers/common/accountController';

const router = express.Router();

router.get('/do', accountController.doMe);

export default router;
