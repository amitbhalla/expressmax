import path from 'path';
import express from 'express';

const router = express.Router();

router.get('/product', (req, res, next) => {
  res.status(200);
  res.sendFile(path.join(path.resolve(), 'views', 'product.html'));
});

router.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

export default router;
