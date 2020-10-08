import dotenv from 'dotenv';
import express from 'express';
import { logger } from './utils/logger';

dotenv.config({
  path: '.env'
});

class Server {
  public app = express();
}

const server = new Server();

(port = process.env.APP_PORT || 5000) => {
  server.app.listen(port, () => logger.info(`Listening on port ${port}`));
};
