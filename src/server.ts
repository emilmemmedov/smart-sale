import 'reflect-metadata';
import App from './app';
import { config } from './config/config';
import { sequelize } from './sequelize';
import { logger } from './logging/logger';

const app = new App();
app.init().then(async () => {
  const port = config.PORT;

  await sequelize
    .sync()
    .then(() => {
      logger.info('Connected to Database');
    })
    .catch((err) => {
      console.log('Database Error: ', err);
    });

  app.httpServer.listen(port, () => {
    logger.info(`App running on port ${port}`);
  });
});
