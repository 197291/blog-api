import db from '../model';

export async function deleteConnection(id) {

    const result = await db.sequelize.query(
      `DELETE FROM followers WHERE id=:id`, 
      { 
        type: db.sequelize.QueryTypes.DELETE,
        replacements: { id }
      }
    )
    return result;
}

export async function createConnection(data) {
  
    const result = await db.sequelize.query(
      `INSERT INTO followers (follower, following)
        VALUES (:follower, :following)
        RETURNING followers.id`, 
      { 
        // type: db.sequelize.QueryTypes.INSERT,
        replacements: { 
          follower: data.follower,
          following: data.following
        }
      }
    )
    console.log(result)
    return result;
}