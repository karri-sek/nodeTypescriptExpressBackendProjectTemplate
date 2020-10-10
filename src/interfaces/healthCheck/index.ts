export interface HealthCheckApiResponse {
  uptime: number;
  message: string;
  timestamp: number;
}
export interface HealthCheck {
  getStatus(): HealthCheckApiResponse;
}
