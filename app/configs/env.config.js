require('dotenv').config();
// const env = process.env.NODE_ENV || 'prodExt'; // 'dev', 'test', 'prodInt, prodExt
const env = process.env.IS_STAGING === 'true' ? 'development' : 'prodExt'; // 'dev', 'test', 'prodInt, prodExt

const development = {
  app: {
    host: process.env.APP_HOST,
    port: Number(process.env.APP_PORT)
  }
};

const config = {
  development,
};

console.log('App is running on', env, 'environment');
module.exports = config[env];
