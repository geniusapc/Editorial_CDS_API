const contact = require('../api/contactUs/contactUs');
const event = require('../api/event');
const gallery = require('../api/gallery');
const user = require('../api/user');

module.exports = (app) => {
  app.use('/api/contact', contact);
  app.use('/api/event', event);
  app.use('/api/gallery', gallery);
  app.use('/api/user', user);
};
