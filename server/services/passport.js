import jwt from 'jsonwebtoken';
import passport from "passport";
import passportJWT  from "passport-jwt";
import Sequelize from 'sequelize';
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

import db from '../model';
import config from '../config/config';

const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;
const Op = Sequelize.Op;

let jwtOptions = {}
jwtOptions.jwtFromRequest = function(req){

  let token;
  if(req && !!req.headers['authorization']){
    token = req.headers['authorization'];
  }
  return token;
}

jwtOptions.secretOrKey = config.securityPhrase;

passport.use(new JwtStrategy(jwtOptions, function(jwt_payload, done) { 
  db.User
    .findOne({ where: { id: {[Op.eq]: jwt_payload.id}} })
    .then((user) => {
      if (user) {
        return done(null, user.dataValues.id, {message:'Succes authenticate'});
      } else {
        return done(null, false, {status: 401, message:'Unauthorized'});
      }
    })
    .catch(err => {
      if(err) throw err
    })
}));

passport.use(new GoogleStrategy({
   clientID: config.google.id,
   clientSecret: config.google.secret,
   callbackURL: config.google.callback,
  }, 
  function(request, accessToken, refreshToken, profile, done) {
    db.User
    .findOne({ where: { google_id: profile.id }})
    .then((user) => {
        if (user) {
          done(null, user);
        } else {
      
          done(null, false);
        }
      })
  }
));

export default passport;