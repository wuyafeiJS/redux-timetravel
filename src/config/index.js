import baseConfig from './base';

let envConfig;
switch (process.env.APP_ENV) {
  case 'dev':
    envConfig = require('./dev');
    break;
  case 'test':
    envConfig = require('./test');
    break;
  case 'uat':
    envConfig = require('./uat');
    break;
  case 'prod':
    envConfig = require('./prod');
    break;
  default:
    break;
}

const allConfig = Object.assign({}, baseConfig, envConfig);
Object.freeze(allConfig);

// eslint-disable-next-line no-console
console.log(allConfig);

export default allConfig;
