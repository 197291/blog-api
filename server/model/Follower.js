export default function (sequelize, DataTypes){

  const Follower = sequelize.define('Follower', {
    id: DataTypes.BIGINT,
    follower: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    following: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      references: {
        model: 'User',
        key: 'id'
      }
    }
  },
  {
    tableName: 'followers',
    timestamps: false
  })
  
  return Follower;
  }