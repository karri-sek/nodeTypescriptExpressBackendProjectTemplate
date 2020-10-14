'use strict';

import joi from 'joi';

const envVarsSchema = joi
  .object({
    PORT: joi.number().required()
  })
  .unknown()
  .required();

const { error, value: envVars } = envVarsSchema.validate(process.env);
if (error) {
  throw new Error(`server config validation error: ${error.message}`);
}

export const config = {
  server: {
    port: envVars.PORT
  }
};
export default config;
