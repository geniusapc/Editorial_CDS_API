const express = require('express');
const helmet = require('helmet');
const compression = require('compression');

module.exports = (app) => {
  app.use(helmet());
  app.use(compression());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
};
