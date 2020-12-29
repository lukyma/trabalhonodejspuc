const express = require('express');
const controller = require('../controllers/calcController');
const router = express.Router();

router.get('/operation', controller.getResultExpression);
router.get('/', controller.getCalc);

module.exports = router;