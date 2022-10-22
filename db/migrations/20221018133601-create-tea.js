/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const attributes = {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      title: {
        allowNull: false,
        type: Sequelize.TEXT,
      },

      picture: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      coordinateX: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      coordinateY: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    };
    await queryInterface.createTable('Teas', attributes);
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Teas');
  },
};
