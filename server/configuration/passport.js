// check passport-jwt docs for this code 

const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/User');

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}


passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
    // test if it returns the user payload
    // console.log(jwt_payload);
    const { id }  = jwt_payload; 

    try {

        const user = await User.findById(id);

        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    } catch (err) {
        return done(err, false);
    }



}));

module.exports = passport; 