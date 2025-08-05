// routes/stockRoutes.js
const express = require('express');
const ctrl    = require('../controllers/stockController');
const router  = express.Router();

router.get('/',  ctrl.getStocks);
router.post('/', ctrl.createStock);

module.exports = router;
