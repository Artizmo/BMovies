import express from 'express';
import dotenv from 'dotenv';
import moviesRoutes from './routes/moviesRoutes';
const app = express();
dotenv.config();

app.use('/movies', moviesRoutes);

app.get('/', (req, res) => {
  res.send('Main').status(200);
});

app.get('/*', (req, res) => {
  console.log('bingo');
  res.redirect(301, '/');
});

app.listen(process.env.PORT);