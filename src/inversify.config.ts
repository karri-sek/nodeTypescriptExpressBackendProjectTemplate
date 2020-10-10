import 'reflect-metadata';
import { Container } from 'inversify';
import { TYPES } from './ioc/types';
import { HealthCheckController } from './controllers/healthCheck';
import { HealthCheckService } from './services/healthCheck';
let container = new Container();

container
  .bind<HealthCheckController>(TYPES.HealthCheckController)
  .to(HealthCheckController)
  .inSingletonScope();
container
  .bind<HealthCheckService>(TYPES.HealthCheckService)
  .to(HealthCheckService)
  .inSingletonScope();

export default container;
