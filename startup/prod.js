const express = require("express");
const helmet = require("helmet");
const path = require("path");

// const compression = require("compression");

module.exports = app => {
  if (process.env.NODE_ENV === "production") {
    app.use(helmet());
    // app.use(compression());
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
  }
};
