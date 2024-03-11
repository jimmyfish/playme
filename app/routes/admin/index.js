import express from 'express';
import Account from './account.route';

const router = express.Router();
router.use('/account', Account);

module.exports = router;
