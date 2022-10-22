const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Comment }) {
      User.Comments = User.hasMany(Comment, { foreignKey: 'userId' });
    }
  }
  const attributes = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },

    login: {
      allowNull: false,
      type: DataTypes.STRING,
    },

    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },

    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },

    role: {
      allowNull: false,
      type: DataTypes.STRING,
    },

    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },

    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  };
  const options = {
    sequelize,
    modelName: 'User',
    tableName: 'Users',
  };

  User.init(attributes, options);
  return User;
};
