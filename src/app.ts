import { Application } from 'express';
import { createServer, Server } from 'http';
import {
  createExpressServer,
  RoutingControllersOptions,
} from 'routing-controllers';
import { errorHandler } from './exception/handler';
import { config } from './config/config';
import { sequelize } from './sequelize';
import { logger } from './logging/logger';

export default class App {
  public async init() {
    const routingControllerOptions: RoutingControllersOptions = {
      routePrefix: '/api/v1',
      controllers: [`${__dirname}/modules/**/controller/*.controller.*`],
      validation: true,
      classTransformer: true,
      defaultErrorHandler: false,
    };

    const app = createExpressServer(routingControllerOptions);
    app.use(errorHandler);

    const httpServer = createServer(app);

    const port = config.PORT;

    sequelize
      .sync()
      .then(() => {
        logger.info('Connected to Database');
      })
      .catch((err) => {
        logger.error(err);
      });

    httpServer.listen(port, () => {
      logger.info(`App running on port ${port}`);
    });

    return app;
  }
}
