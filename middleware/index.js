const express = require("express");
const bodyParser = require("body-parser");
const config = require("../config");

module.exports = function(app) {
  if (!config.jwtPass) {
    console.error(`FATAL ERROR: jwtPass is not set.`);
    process.exit(1);
  }
  if (!config.adminPassword) {
    console.error(`FATAL ERROR: adminPassword is not set.`);
    process.exit(1);
  }

  // body parser
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  // static files
  app.use(express.static("./public"));
};
