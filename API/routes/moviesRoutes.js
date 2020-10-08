import express from 'express';

const moviesRoutes = express();

// base route /movies
moviesRoutes.get('/', (req, res) => {
  res.send('movies API here!');
});

export default moviesRoutes;
