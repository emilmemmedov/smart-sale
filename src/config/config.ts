import 'dotenv/config';
import * as process from 'process';
export const config = {
  PORT: process.env.PORT,
  DB_PG_HOST: process.env.DB_PG_HOST,
  DB_PG_USERNAME: process.env.DB_PG_USERNAME,
  DB_PG_PORT: process.env.DB_PG_PORT,
  DB_PG_NAME: process.env.DB_PG_NAME,
  DB_PG_PASSWORD: process.env.DB_PG_PASSWORD,
};
