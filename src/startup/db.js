const { Sequelize } = require('sequelize');
const { DB_DATABASE, DB_USER, DB_PASSWORD } = require('../config/keys');

if (process.env.NODE_ENV === 'production') {
  module.exports = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    logging: false,
  });
} else {
  module.exports = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
    dialect: 'postgres',
    logging: false,
  });
}
