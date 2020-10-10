import express from 'express';
import container from '../../inversify.config';
import { HealthCheckController } from '../../controllers/healthCheck';
import TYPES from '../../ioc/types';
const hcController = container.get<HealthCheckController>(
  TYPES.HealthCheckController
);
export const healthCheckRoute = express.Router();

healthCheckRoute.get('/', (req, res) => {
  hcController.getHealthCheck(req, res);
});

export default healthCheckRoute;
