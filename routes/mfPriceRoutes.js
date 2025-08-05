const express = require('express');
const ctrl    = require('../controllers/mfPriceController');
const router  = express.Router();

router.get('/:mfId', ctrl.getMFPrices);
router.post('/',     ctrl.createMFPrice);

module.exports = router;
