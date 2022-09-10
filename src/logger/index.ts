import winston from 'winston';

const {
  LOG_LEVEL,
  STAGE,
} = process.env;

const logger = winston.createLogger({
  level: LOG_LEVEL,
  // eslint-disable-next-line max-len
  format: STAGE !== 'dev' ? winston.format.json() : winston.format.combine(winston.format.json(), winston.format.prettyPrint()),
  transports: [
    new winston.transports.Console(),
  ],
});

export default logger;
