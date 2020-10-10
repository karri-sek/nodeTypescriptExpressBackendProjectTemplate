import dotenv from 'dotenv';
import Application from './application';
import { logger } from './utils/logger';

dotenv.config({
  path: '.env'
});

(async (SECUREPORT) => {
  const app = Application();

  try {
    app.listen(SECUREPORT);
    logger.info(`Server listening on port ${SECUREPORT}`);
  } catch (e) {
    logger.error('No HTTPS version of the server running', e);
  }
})(parseInt(process.env.APP_PORT || '', 10) || 3002);
