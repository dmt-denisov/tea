const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tea extends Model {
    static associate({ Comment }) {
      Tea.Comments = Tea.hasMany(Comment, { foreignKey: 'teaId' });
    }
  }

  const attributes = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },

    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },

    title: {
      allowNull: false,
      type: DataTypes.TEXT,
    },

    picture: {
      allowNull: false,
      type: DataTypes.STRING,
    },

    coordinateX: {
      allowNull: false,
      type: DataTypes.STRING,
    },

    coordinateY: {
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
    modelName: 'Tea',
    tableName: 'Teas',
  };

  Tea.init(attributes, options);
  return Tea;
};
