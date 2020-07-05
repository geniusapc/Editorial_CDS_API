const GoogleStrategy = require('passport-google-oauth20');
const { GOOGLECLIENTID, GOOGLECLIENTSECRET } = require('../../config/keys');
const User = require('../../model/User');

module.exports = new GoogleStrategy(
  {
    clientID: GOOGLECLIENTID,
    clientSecret: GOOGLECLIENTSECRET,
    callbackURL: '/auth/google/redirect',
  },
  (accessToken, refreshToken, profile, cb) => {
    const { id, name, photos } = profile;
    User.findOrCreate(
      { googleId: id },
      { name: name.givenName, imageUrl: photos[0].value },
      (err, user) => {
        return cb(err, user);
      }
    );
  }
);
