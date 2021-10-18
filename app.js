import express from 'express';

// Constants
const PORT = 3000;
const ADDR = '0.0.0.0';
const app = express();

//  Listen
app.listen(PORT, ADDR, () => console.log(`Listening to ${PORT} on ${ADDR}`));
