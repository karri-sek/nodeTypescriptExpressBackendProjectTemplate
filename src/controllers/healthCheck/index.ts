import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { TYPES } from '../../ioc/types';
import HealthCheckService from '../../services/healthCheck';

@injectable()
export class HealthCheckController {
  private healthCheck: HealthCheckService;
  constructor(
    @inject(TYPES.HealthCheckService) healthCheck: HealthCheckService
  ) {
    this.healthCheck = healthCheck;
  }
  public async  getHealthCheck(req: Request, res: Response) {
    const status =  this.healthCheck.getStatus();
    res.send(status);
  }
}

export default HealthCheckController;
