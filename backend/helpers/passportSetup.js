const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
passport.serializeUser(function (user, cb) {
  cb(null, user.id);
});
passport.deserializeUser(function (id, done) {
  done(null, id);
});
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "https://pcon-kalyan.herokuapp.com/auth/google/callback",
    },
    function async(accessToken, refreshToken, profile, cb) {
      return cb(null, profile);
    }
  )
);
