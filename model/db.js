const config = require("../config");
let db = config.db;
const { Sequelize } = require("sequelize");
if (process.env.NODE_ENV == "production") {
  module.exports = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    protocol: "postgres",
    logging: true //false
  });
} else {
  module.exports = new Sequelize(db.database, db.user, db.password, {
    dialect: "postgres",
    logging: false
  });
}
