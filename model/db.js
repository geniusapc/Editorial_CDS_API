const config = require("../config");
let db = config.db
const {Sequelize} = require('sequelize')
module.exports = new Sequelize(db.database, db.user, db.password, {dialect:'postgres'})