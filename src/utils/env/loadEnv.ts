import dotenv from 'dotenv';
import EnvTypes from '../../types/enum/envTypes';
((env: any) => {
  switch (env) {
    case EnvTypes.Production:
      dotenv.config({ path: '.env.production' });
      break;
    case EnvTypes.Staging:
      dotenv.config({ path: '.env.production' });
      break;
    case EnvTypes.Test:
      dotenv.config({ path: '.env.production' });
      break;
    default:
      dotenv.config({ path: '.env.dev' });
  }
})(process.env.NODE_ENV);
