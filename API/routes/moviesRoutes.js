import express from 'express';
const moviesRoutes = express.Router();

moviesRoutes.get('/movies', (req, res) => {
  res.send('Movies API!');
})

export default moviesRoutes;