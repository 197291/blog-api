import db from '../model';
import loggerW from '../config/loggerWinston';

export async function getPostsByUserId(req, res, next){

  try {
    const id = req.params.id;
    const response = await db.Post.findAll({
      where: { user_id: id }
    });

    res.status(200).send(response);

  } catch(err) {
    
    loggerW.log('error', err);
    next(new Error(err.message));
  }

}

export async function getPostsFriends(req, res, next) {
  try {
    const id = req.params.id;
    const response = await db.sequelize.query(
      `SELECT * FROM posts RIGHT JOIN users ON posts.user_id=users.id WHERE
      user_id IN (SELECT following FROM followers WHERE follower=:id);`, 
      { 
        type: db.sequelize.QueryTypes.SELECT,
        replacements: { id }
      }
    )
    
    res.status(200).send(response);
    
  } catch (err) {

    loggerW.error(err);
    next(new Error(err.message));
  }
}

export async function createNewPost(req, res, next) {
  try {
    const data = req.body;
    const response = await db.sequelize.query(
      `INSERT INTO posts (user_id, title, content, date) 
        VALUES (:user_id, :title, :content, :date)`, 
      { 
        type: db.sequelize.QueryTypes.INSERT,
        replacements: { 
          user_id: data.user_id,
          title: data.title,
          content: data.content,
          date: data.date 
        }
      }
    )

    res.status(201).send(response);

  } catch(err) {
    
    loggerW.error(err);
    next(new Error(err.message));
  }
}