import dotenv from 'dotenv';
import EnvTypes from '../../types/enum/envTypes';
((env: any) => {
  switch (env) {
    case EnvTypes.Production:
      dotenv.config({ path: '.env.production' });
    case EnvTypes.Staging:
      dotenv.config({ path: '.env.production' });
    case EnvTypes.Test:
      dotenv.config({ path: '.env.production' });
    default:
      dotenv.config({ path: '.env' });
  }
})(process.env.NODE_ENV);
