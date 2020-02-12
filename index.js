const express = require("express");
const app = express();
const config = require("./config");
const logger = require("./startup/logger")();

require("./startup/config")(app);
require("./middleware")(app);
require("./startup/api")(app);
require("./startup/prod")(app);

app.listen(config.port, () => {
  logger.info(`listening to port ${config.port}`);
});
