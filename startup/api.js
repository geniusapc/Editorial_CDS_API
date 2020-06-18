const express = require("express");
const errorHandler = require("../middleware/errorHandling");

const contact = require("../api/contact");
const gallery = require("../api/gallery");
const user = require("../api/user");
const about = require("../api/about");
const event = require("../api/event");
const leaders = require("../api/leaders");
const test = require("../api/test");

module.exports = app => {
  app.use("/api/event", event);
  app.use("/api/contact", contact);
  app.use("/api/gallery", gallery);
  app.use("/api/user", user);
  app.use("/api/about", about);
  app.use("/api/leaders", leaders);
  app.use("/api/test", test);
  app.use(errorHandler);
};
