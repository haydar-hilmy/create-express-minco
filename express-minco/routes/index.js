import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express Minco' });
});

router.get('/hello', function(req, res, next) {
  res.send('Hello from modified express-generator template!');
});

export default router;
