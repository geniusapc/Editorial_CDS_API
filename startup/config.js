const winston = require('winston');
const config = require("../config");

module.exports = (app) => {
    if (!config.jwtPass) {
        winston.error(`FATAL ERROR: jwtPass is not set.`);
        process.exit(1);
    }

    if (!config.adminPassword) {
        winston.error(`FATAL ERROR: adminPassword is not set.`);
        process.exit(1);
    }

}