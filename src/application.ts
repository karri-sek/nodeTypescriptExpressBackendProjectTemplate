import express, { Express } from 'express';
import { healthCheck } from './routes/healthCheck';
const Application = (): Express => {
  const app: Express = express();
  app.use('/healthcheck', healthCheck);
  return app;
};

export default Application;
