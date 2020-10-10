import express, { Express } from 'express';
import { healthCheckRoute } from './routes/healthCheck';
const Application = (): Express => {
  const app: Express = express();
  app.use('/healthcheck', healthCheckRoute);
  return app;
};

export default Application;
