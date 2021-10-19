import path from 'path';
import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200);
  res.sendFile(path.join(path.resolve(), 'views', 'shop.html'));
});

export default router;
