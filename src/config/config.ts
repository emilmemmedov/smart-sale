import 'dotenv/config';
import * as process from 'process';
import { logger } from '../logging/logger';
const Joi = require('joi');
export const ConfigSchema = Joi.object({
  PORT: Joi.required(),
  DB_PG_HOST: Joi.string().required(),
  DB_PG_USERNAME: Joi.string().required(),
  DB_PG_PORT: Joi.required(),
  DB_PG_NAME: Joi.string().required(),
  DB_PG_PASSWORD: Joi.string().required(),
});

export const config = {
  PORT: process.env.PORT,
  DB_PG_HOST: process.env.DB_PG_HOST,
  DB_PG_USERNAME: process.env.DB_PG_USERNAME,
  DB_PG_PORT: process.env.DB_PG_PORT,
  DB_PG_NAME: process.env.DB_PG_NAME,
  DB_PG_PASSWORD: process.env.DB_PG_PASSWORD,
};

const validation = ConfigSchema.validate(config);

if (validation['error']) {
  logger.error(JSON.stringify(validation['error']['details']));
  process.exit();
}
