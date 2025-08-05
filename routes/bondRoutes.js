const express = require('express');
const ctrl    = require('../controllers/bondController');
const router  = express.Router();

router.get('/',  ctrl.getBonds);
router.post('/', ctrl.createBond);

module.exports = router;
