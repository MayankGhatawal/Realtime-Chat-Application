import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use("/api/auth", authRoutes);
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
    connectDB();
});