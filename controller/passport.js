const passport= require('passport');
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

const GOOGLE_CLIENT_ID ="*****************************";
const GOOGLE_CLIENT_SECRET ="***********************************";

passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5500/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    done(null, profile);
    })
);

passport.serializeUser((user,done) =>{
    done(null,user);
});
passport.deserializeUser((user,done) =>{
    done(null,user);
});
