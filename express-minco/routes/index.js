import express from 'express';
import { helloController } from '../controllers/indexController.js';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express Minco' });
});

router.get('/hello', helloController);

export default router;
