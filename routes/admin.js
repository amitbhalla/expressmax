import express from 'express';

const router = express.Router();

router.get('/product', (req, res, next) => {
  res.send(
    `<form action='/admin/product' method='POST'>
        <input type='text' name='title' />
        <button type='submit'>Add product</button>
        </form>`
  );
});

router.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

export default router;
