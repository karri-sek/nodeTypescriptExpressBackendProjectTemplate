'use strict';
import joi from 'joi';
const envVarsSchema = joi
  .object({
    PORT: joi.number().required(),
    NODE_ENV: joi.string().required(),
    CERTIFICATE_PATH: joi.string().required(),
    CERTIFICATE_KEY_PATH: joi.string().required(),
    CERTIFICATE_CA_KEY_PATH: joi.string().required()
  })
  .unknown()
  .required();

const { error, value: envVars } = envVarsSchema.validate(process.env);
if (error) {
  throw new Error(`server config validation error: ${error.message}`);
}

export const config = {
  server: {
    port: envVars.PORT,
    nodeEnv: envVars.NODE_ENV,
    certPath: envVars.CERTIFICATE_PATH,
    certKeyPath: envVars.CERTIFICATE_KEY_PATH,
    caCertPath: envVars.CERTIFICATE_CA_KEY_PATH
  }
};
export default config;
