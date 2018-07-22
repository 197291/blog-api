import uuidv4 from 'uuid/v4';
import Sequelize from 'sequelize';

import db from '../model';
import { createPass, comparePass } from '../services/hash';
import { signToken } from '../services/auth';
import loggerW from '../config/loggerWinston';

const Op = Sequelize.Op;

export async function signUp(req, res, next){

  const data = req.body;

  try {
    const pass = data.password;
    const hashPass = createPass(pass);
    const user = await db.User.create({
      name: data.name,
      password: hashPass,
      age: data.age,
      email: data.email
    });
  
    const id = user.dataValues.id;
    const token = signToken(id);
  
    const response = {
      message: 'Sign-up successfully',
      result: 1,
      data: {
        token,
        user: {
          id,
          name: data.name,
          email: data.email,
          remember_me: data.remember_me
        }
      }
    }
  
    res.status(200).send(response);

  } catch(err) {

    loggerW.error(err);
    next(new Error(err.message));
  }
}

export function signIn(req, res, next){

  const data = req.body;

  db.User
    .findOne({ where: { email: { [Op.eq]: data.email } } })
    .then(user => {
      if (user !== null && comparePass(user.dataValues, data.password)) {
        let token = signToken(user.dataValues.id);
        res.status(200).send({
          result: 1,
          data: {
            token,
            user: {
              user_id: user.id,
              name: user.name,
              email: user.email
            }
          },
          message: 'Sign-in successfully.'
        })
      } else  {
        res.status(401).send({
          result: 2,
          message: 'Login or password is incorrect.'
        })
      }
    })
    .catch(err => { 
      loggerW.error(err);
      throw new Error(err.message)
    })
}