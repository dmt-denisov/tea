/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface) {
    const userData = [
      {
        login: 'admin', email: 'admin@admin.ru', password: await bcrypt.hash('123123123', 10), role: 'admin',
      },
      {
        login: 'user', email: 'user@user.ru', password: await bcrypt.hash('123123123', 10), role: 'user',
      },
    ];
    const users = userData.map((user) => ({
      ...user,
      createdAt: new Date(),
      updatedAt: new Date(),

    }));

    await queryInterface.bulkInsert('Users', users);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users');
  },
};
