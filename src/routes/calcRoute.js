import express from 'express';
import controller from '../controllers/calcController';
const router = express.Router();

router.get('/operation', controller.getResultExpression);
router.get('/', controller.getCalc);

export default router;