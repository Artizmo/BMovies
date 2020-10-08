import express from 'express';
import moviesRoutes from './moviesRoutes';

const app = express();

app.use('/movies', moviesRoutes);

export default app;
