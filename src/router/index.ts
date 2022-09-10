import {
  NextFunction, Request, Response, Router,
} from 'express';
import logger from '../logger';
import status from './status';

const { STAGE } = process.env;

const router = Router();

router.use((req: Request, _res: Response, next: NextFunction) => {
  const {
    url,
    body,
    query,
  } = req;
  logger.debug({
    url,
    query,
    ...STAGE === 'dev' && { body },
  });
  next();
});

router.use('/status', status);

export default router;
