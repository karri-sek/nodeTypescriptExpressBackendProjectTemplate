import express from 'express';
import { Request, Response } from 'express';
export const healthCheck = express
  .Router()
  .get('/', async (req: Request, res: Response) => {
    const healthcheck = {
      uptime: process.uptime(),
      message: 'OK',
      timestamp: Date.now()
    };
    try {
      res.send(healthcheck);
    } catch (e) {
      healthcheck.message = e;
      res.status(503).send();
    }
  });
export default healthCheck;
