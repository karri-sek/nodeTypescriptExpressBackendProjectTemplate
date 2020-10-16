import fs from 'fs';
import https from 'https';
import Application from './application';
import { logger } from './utils/logger';
import config from './config/index';
(async (SECUREPORT) => {
  const app = Application();

  try {
    const httpsCreds = {
      cert: fs.readFileSync(config.server.certPath),
      key: fs.readFileSync(config.server.certKeyPath),
      ca: fs.readFileSync(config.server.caCertPath)
    };
    await https.createServer(httpsCreds, app).listen(SECUREPORT);
    logger.info(`Server listening on port ${SECUREPORT}`);
    logger.info(`https://localhost:${SECUREPORT}`);
  } catch (e) {
    logger.info('No HTTPS version of the server running');
  }
})(parseInt(config.server.port || '', 10) || 3002);
