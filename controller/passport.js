const passport= require('passport');
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

const GOOGLE_CLIENT_ID ="768638791841-b86emfbh6tsvo9nj0vtrto34i3tbjuak.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET ="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";

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