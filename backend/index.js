import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.auth.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes)
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
    connectDB();
});