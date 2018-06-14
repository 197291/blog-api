import db from '../model';

export async function getPostsByUserId(id){

  const posts = await db.Post
    .findAll({
      where: {
        user_id: id
      }
  });
  return posts;
}

export async function getPostsFriends(id) {
    try {
      const posts = await db.sequelize.query(
        `SELECT * FROM posts RIGHT JOIN users ON posts.user_id=users.id WHERE
        user_id IN (SELECT following FROM followers WHERE folower=:id);`, 
        { 
          type: db.sequelize.QueryTypes.SELECT,
          replacements: { id }
        }
      )
      return posts;
    } catch (err) {
      throw err
    }
}

export async function createNewPost(data) {
  try {
    const posts = await db.sequelize.query(
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
    return posts;
  } catch (err) {
    next(new Error(err.message))
  }
}