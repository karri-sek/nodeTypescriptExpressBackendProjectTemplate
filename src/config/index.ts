'use strict';
import '../utils/env/loadEnv';
import common from './common';
import logger from './logger';
import server from './server';
export const config = Object.assign({}, common, server, logger);
export default config;
