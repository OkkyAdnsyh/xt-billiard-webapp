const fs = require('fs');

module.exports = {
    development: {
      username: 'root',
      password: '',
      database: 'xt_billiard',
      host: '127.0.0.1',
      port : 3306,
      dialect: 'mysql',
    },
    test: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      dialect: 'mysql',
    },
    production: {
      username: process.env.PROD_DB_USERNAME,
      password: process.env.PROD_DB_PASSWORD,
      database: process.env.PROD_DB_NAME,
      host: process.env.PROD_DB_HOSTNAME,
      port: process.env.PROD_DB_PORT,
      dialect: 'mysql',
    },
  };