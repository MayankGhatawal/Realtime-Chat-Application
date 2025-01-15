import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

connectDB();
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
});