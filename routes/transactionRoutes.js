const express = require('express');
const ctrl    = require('../controllers/transactionController');
const router  = express.Router();

router.get('/',  ctrl.getTransactions);
router.post('/', ctrl.createTransaction);

module.exports = router;
