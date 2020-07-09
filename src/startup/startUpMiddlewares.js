const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const constant = require("../constant")

module.exports = (app) => {
  app.use(helmet());
  app.use(compression());
  app.use(
    cors({
      origin: constant.CLIENTHOST,
      exposedHeaders: ['x-auth-token', 'Content-Length', 'Content-Type'],
      allowedHeaders: ['x-auth-token', 'Content-Length', 'Content-Type'],
    })
  );

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
};
