import { Sequelize } from 'sequelize-typescript';
import { config } from './config/config';
export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: config.DB_PG_HOST,
  port: +config.DB_PG_PORT,
  username: config.DB_PG_USERNAME,
  password: config.DB_PG_PASSWORD,
  database: config.DB_PG_NAME,
  models: [`${__dirname}/modules/**/model/*.model.*`],
});
