import jwt from 'jsonwebtoken';
import config from '../config/config';

export function signToken(user_id) {
  return jwt.sign({ id: user_id }, config.securityPhrase, { expiresIn: '7d' });
}

export function verifyToken(req, res, next) {
  jwt.verify(token, config.securityPhrase, function(err, decoded){
    req._user = decoded;
    next(err)
  });
}