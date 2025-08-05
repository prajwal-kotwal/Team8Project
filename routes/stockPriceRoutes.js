const express = require('express');
const ctrl    = require('../controllers/stockPriceController');
const router  = express.Router();

router.get('/:stockId', ctrl.getStockPrices);
router.post('/',        ctrl.createStockPrice);

module.exports = router;
