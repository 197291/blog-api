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
  models.User.hasMany(models.Post, {
    onDelete: "CASCADE",
    foreignKey: {
      name: 'user_id',
      allowNull: false
    }
  });
  models.User.belongsTo(models.Follower, {
    onDelete: "CASCADE",
    foreignKey: {
      name: 'follower',
      allowNull: false
    }
  });
  models.User.belongsTo(models.Follower, {
    onDelete: "CASCADE",
    foreignKey: {
      name: 'following',
      allowNull: false
    }
  });
};

return User;
}