import bcrypt from 'bcrypt';

import config from '../config/config';

export function createPass(pass){
  return bcrypt.hashSync(pass, config.saltRounds);
}

export function comparePass(user, pass){
  return bcrypt.compareSync(pass, user.password)
}