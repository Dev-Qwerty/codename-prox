const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const User = require('../models/users')
const keys = require('./keys')

passport.use(
    new GoogleStrategy({
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done) => {
        User.findOne({googleID: profile.id}).then((currentUser)=> {
            if(currentUser) {
                console.log('User is '+ currentUser)
                done(null, currentUser)
            }
            else {
                new User({
                    username: profile.displayName,
                    googleID: profile.id
                }).save().then((newUser) => {
                    console.log('new user created: '+ newUser)
                    done(null, newUser) //null as no error is assumed
                })
            }
        })
    }
    )
)