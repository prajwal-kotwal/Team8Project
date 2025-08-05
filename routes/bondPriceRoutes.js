const express = require('express');
const ctrl    = require('../controllers/bondPriceController');
const router  = express.Router();

router.get('/:bondId', ctrl.getBondPrices);
router.post('/',       ctrl.createBondPrice);

module.exports = router;
