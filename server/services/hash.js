import bcrypt from 'bcrypt';
import config from '../config/config';

export function createPass(pass){
  let hash = bcrypt.hashSync(pass, config.saltRounds);
  return hash;
}

export function comparePass(user, pass){
  const passFromtable = user.password.trim();
  return pass === passFromtable;
  //return bcrypt.compareSync(pass, passFromtable)
}