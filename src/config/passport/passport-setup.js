const passport = require('passport');
const GoogleStrategy = require('./GoogleStrategy');

module.exports = (app) => {
  passport.use(GoogleStrategy);

  passport.serializeUser((user, cb) => cb(null, user));
  passport.deserializeUser((obj, cb) => cb(null, obj));

  app.use(passport.initialize());
  app.use(passport.session());
};
