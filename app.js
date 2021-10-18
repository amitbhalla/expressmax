import express from 'express';
import adminRoutes from './routes/admin.js';
import shopRoutes from './routes/shop.js';

// Constants
const PORT = 3000;
const ADDR = '0.0.0.0';
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/admin', adminRoutes);
app.use('/', shopRoutes);

// 404
app.use((req, res, next) => {
  res.status(404);
  res.send('<h3>404 - Page not found!</h3>');
});

//  Listen
app.listen(PORT, ADDR, () => console.log(`Listening to ${PORT} on ${ADDR}`));
