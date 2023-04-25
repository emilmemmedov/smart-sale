import express from 'express';
import { config } from './config/config';
const app = express();

const port = config.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
