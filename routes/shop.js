import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200);
  res.send('Shop - Home Page');
});

export default router;
