import { injectable } from 'inversify';
import {
  HealthCheck,
  HealthCheckApiResponse
} from '../../interfaces/healthCheck';

@injectable()
export class HealthCheckService implements HealthCheck {
  public getStatus(): HealthCheckApiResponse {
    return {
      uptime: process.uptime(),
      message: 'OK',
      timestamp: Date.now()
    };
  }
}
export default HealthCheckService;
