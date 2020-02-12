require("express-async-errors");
const logger = require("./startup/logger")();

module.exports = app => {
    process.on("unhandledRejection", ex => {
        logger.error(ex)
    });
}


