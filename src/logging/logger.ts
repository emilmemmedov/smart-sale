import { createLogger, transports, format } from 'winston';
export const logger = createLogger({
  transports: [
    new transports.Console({
      level: process.env.LOG_LEVEL ?? 'info',
    }),
  ],
  format: format.combine(
    format.colorize(),
    format.splat(),
    format.metadata(),
    format.timestamp(),
    format.printf(({ timestamp, level, message, metadata }) => {
      return `[${timestamp}] ${level}: ${message}. ${JSON.stringify(metadata)}`;
    }),
  ),
});
