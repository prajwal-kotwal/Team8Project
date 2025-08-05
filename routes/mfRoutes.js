const express = require('express');
const ctrl    = require('../controllers/mfController');
const router  = express.Router();

router.get('/',  ctrl.getMFs);
router.post('/', ctrl.createMF);

module.exports = router;
