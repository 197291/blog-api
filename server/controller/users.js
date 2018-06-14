import db from '../model';

export async function getUsersByName(req, res, next) {

    const userId = req.query.userId;
    const char = req.query.char;

    try {
      
      const users = await db.sequelize.query(
      `SELECT users.id, name, folowers.id AS followerID FROM users 
      LEFT JOIN followers ON :userId = follower AND following = users.id
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
      next(new Error(err.message))
    }
}