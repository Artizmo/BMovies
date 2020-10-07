import express from 'express';
import dotenv from 'dotenv';
import moviesRoutes from './routes/moviesRoutes';
const app = express();
dotenv.config();

app.use('/movies', moviesRoutes)

app.listen(process.env.PORT);