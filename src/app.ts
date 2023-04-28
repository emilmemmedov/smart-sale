import { Application } from 'express';
import * as express from 'express';
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
  public express: Application;

  public httpServer: Server;

  public async init(): Promise<void> {
    const routingControllerOptions: RoutingControllersOptions = {
      routePrefix: '/api/v1',
      controllers: [`${__dirname}/modules/**/controller/*.controller.*`],
      validation: true,
      classTransformer: true,
      defaultErrorHandler: false,
    };

    this.express = createExpressServer(routingControllerOptions);
    this.express.use(errorHandler);

    this.httpServer = createServer(this.express);
  }
}
