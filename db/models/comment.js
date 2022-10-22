const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({ User, Tea }) {
      Comment.User = Comment.belongsTo(User, { foreignKey: 'userId' });
      Comment.Tea = Comment.belongsTo(Tea, { foreignKey: 'teaId' });
    }
  }

  const attributes = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },

    title: {
      allowNull: false,
      type: DataTypes.TEXT,
    },

    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },

    teaId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Teas',
        key: 'id',
      },
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
    modelName: 'Comment',
  };
  Comment.init(attributes, options);
  return Comment;
};
