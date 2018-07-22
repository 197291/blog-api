import db from '../model';
import loggerW from '../config/loggerWinston';

export async function getUsersByName(req, res, next) {

    const userId = req.user;
    const char = req.query.name;

    try {
      
      const users = await db.sequelize.query(
      `SELECT users.id, name, followers.id AS followerID FROM users 
      LEFT JOIN followers 
      ON users.id = follower AND following=:userId OR following = users.id 
      AND follower = :userId 
      WHERE users.name ILIKE :char AND NOT users.id=:userId`, 
        { 
          type: db.sequelize.QueryTypes.SELECT,
          replacements: { userId, char: `%${char}%` }
        }
      )

      res.status(200).send({
        users,
        result: 1,
        message: 'Success'
      })

    } catch (err) {
      
      loggerW.error(err);
      next(new Error(err.message))
    }
}