const express = require("express");
const bodyParser = require("body-parser");

module.exports = app => {
  // body parser
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  // static files
  app.use(express.static("./public"));
};
