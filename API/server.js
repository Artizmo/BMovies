import express from 'express';
import dotenv from 'dotenv';
import routes from './routes';

const app = express();
dotenv.config();

app.use('/api', routes);

app.use(['/api', '/api*'], (req, res) => {
  res
    .status(404)
    .json({
      message: 'No resources available',
      status: 404,
    });
});

app.get('/', (req, res) => {
  res.json({
    message: 'Looks good!',
    status: 200,
  });
});

app.listen(process.env.PORT);
