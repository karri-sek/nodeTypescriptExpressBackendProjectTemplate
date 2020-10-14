'use strict';
import joi from 'joi';
import { logger } from '../utils/logger';
import { LogLevel } from '../types/enum/envTypes';
const envVarsSchema = joi
  .object({
    LOGGER_LEVEL: joi
      .string()
      .valid(
        LogLevel.ERROR,
        LogLevel.INFO,
        LogLevel.WARN,
        LogLevel.DEBUG,
        LogLevel.FATAL,
        LogLevel.SILENT
      )
      .default(LogLevel.INFO),
    LOGGER_ENABLED: joi
      .boolean()
      .truthy('TRUE')
      .truthy('true')
      .falsy('FALSE')
      .falsy('false')
      .default(true)
  })
  .unknown()
  .required();

const { error, value: envVars } = envVarsSchema.validate(process.env);
if (error) {
  throw new Error(`logger config validation error: ${error.message}`);
}

export const config = {
  logger: {
    level: envVars.LOGGER_LEVEL,
    enabled: envVars.LOGGER_ENABLED
  }
};

logger.level = config.logger.level;
if (!config.logger.enabled) {
  logger.level = 'silent';
}

export default config;
