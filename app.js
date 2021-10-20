import path from 'path';
import express from 'express';

import adminRoutes from './routes/admin.js';
import shopRoutes from './routes/shop.js';

// Constants
const PORT = 3000;
const ADDR = '0.0.0.0';
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(path.resolve(), 'public')));

// Routes
app.use('/admin', adminRoutes);
app.use('/', shopRoutes);

// 404
app.use((req, res, next) => {
  res.status(404);
  res.sendFile(path.join(path.resolve(), 'views', '404.html'));
});

//  Listen
app.listen(PORT, ADDR, () => console.log(`Listening to ${PORT} on ${ADDR}`));
