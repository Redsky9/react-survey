var express = require("express");
var app = express();
var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20").Strategy;
var keys = require("./config/keys.js");

var PORT = process.env.PORT || 5000;

passport.use(new GoogleStrategy({
    clientID: keys.clientID,
    clientSecret: keys.clientSecret,
    callbackURL: '/auth/google/callback'
},
accessToken => {
    console.log(accessToken);
}));

app.get("/auth/google", passport.authenticate('google', {
    scope: ['profile', 'email']
}));

app.get("/auth/google/callback", passport.authenticate('google'));

app.listen(PORT, () => {
    console.log("Server has started!");
});