import passport  from "passport";
import passportJWT  from "passport-jwt";

const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

export default function (sequelize, DataTypes) {

  const User =  sequelize.define('User', {
    name: DataTypes.STRING,
    email:{
      type: DataTypes.STRING,
      field: 'email'
    },
    password:{
      type: DataTypes.STRING,
      field: 'password'
    },
    avatar:{
      type: DataTypes.STRING,
      field: 'avatar'
    },
  }, {
    tableName: 'users',
    timestamps: false
  })


  User.associate = function (models) {

    models.User.belongsToMany(models.User, {
      as: 'userFollowing',
      foreignKey: 'following',
      onDelete: "CASCADE",
      through: models.Follower,
    });
    models.User.belongsToMany(models.User, {
      as: 'userFollower',
      foreignKey: 'follower',
      onDelete: "CASCADE",
      through: models.Follower,
    });
  };

  return User;

}