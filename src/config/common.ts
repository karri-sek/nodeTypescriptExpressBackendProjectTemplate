'use strict';
import joi from 'joi';
import EnvTypes from '../types/enum/envTypes';

const envVarsSchema = joi
  .object({
    NODE_ENV: joi
      .string()
      .trim()
      .uppercase()
      .valid(
        EnvTypes.Development,
        EnvTypes.Test,
        EnvTypes.Staging,
        EnvTypes.Production
      )
      .required()
  })
  .unknown()
  .required();
const { error, value: envVars } = envVarsSchema.validate(process.env);
if (error) {
  throw new Error(`common config validation error: ${error.message}`);
}
export const config = {
  env: envVars.NODE_ENV,
  isTest: envVars.NODE_ENV === EnvTypes.Test,
  isDevelopment: envVars.NODE_ENV === EnvTypes.Development,
  isProduction: envVars.NODE_ENV === EnvTypes.Production
};
export default config;
