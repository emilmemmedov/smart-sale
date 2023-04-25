import 'reflect-metadata';
import { createServer } from 'http';
import {
  createExpressServer,
  RoutingControllersOptions,
} from 'routing-controllers';
import { config } from './config/config';
import { logger } from './logging/logger';

const routingControllerOptions: RoutingControllersOptions = {
  routePrefix: '/api/v1',
  controllers: [`${__dirname}/modules/**/controller/*.controller.*`],
  validation: true,
  classTransformer: true,
  defaultErrorHandler: true,
};

const app = createExpressServer(routingControllerOptions);
const httpServer = createServer(app);

const port = config.PORT;

httpServer.listen(port, () => {
  logger.info(`App running on port ${port}`);
});
