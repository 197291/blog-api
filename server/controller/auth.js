import uuidv4 from 'uuid/v4';

import db from '../model';
import { createPass, comparePass } from '../services/hash';
import { signToken } from '../services/auth';
import Sequelize from 'sequelize';
const Op = Sequelize.Op;

export async function signUp(data){

  let password = data.password,
      user_id = uuidv4();

  password = createPass(password);

  const user =  await db.User.create(
           {name: data.name,
            password: password,
            age: data.age,
            email: data.email}
          );
    // console.log(user);
  let token =  signToken(user_id);

  return {
    status: 200,
    message: 'Sign-up successfully',
    data: {
      token,
      user: {
        user_id: user_id,
        name: data.name,
        email: data.email,
        remember_me: data.remember_me
      }
    }
  }
}

export async function login(data){
  let res = await db.User
  .findOne({ where: { email: { [Op.eq]: data.email } } })
  .then(user => {
    if(user !== null && comparePass(user, data.password)){
      let token = signToken(user.user_id);
      return {
        status: 200,
        result: 1,
        data: {
          token: token,
          user: {
            user_id: user.id,
            name: user.name,
            email: user.email
          }
        },
        message: 'Sign-in successfully.'
      }
    } {
      return  {
        result: 2,
        status: 401,
        message: 'Login or passwarod is incorrect.'
      }
    }
  })
  .catch(err => { 
    throw err
  })
  return res
}