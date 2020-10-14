import fs from 'fs';
import https from 'https';
import Application from './application';
import { logger } from './utils/logger';
import getCertificatePath from './utils/certificate/getCertificatePath';
import isProductionEnv from './utils/env/isProductionEnv';
import config from './config/index';
(async (SECUREPORT) => {
  const app = Application();

  try {
    const { certPath, certKeyPath, caCertPath } = getCertificatePath(
      isProductionEnv(),
      process.cwd()
    );

    const httpsCreds = {
      cert: fs.readFileSync(certPath),
      key: fs.readFileSync(certKeyPath),
      ca: fs.readFileSync(caCertPath)
    };
    await https.createServer(httpsCreds, app).listen(SECUREPORT);
    logger.info(`Server listening on port ${SECUREPORT}`);
    logger.info(`https://localhost:${SECUREPORT}`);
  } catch (e) {
    logger.info('No HTTPS version of the server running');
  }
})(parseInt(config.server.port || '', 10) || 3002);
