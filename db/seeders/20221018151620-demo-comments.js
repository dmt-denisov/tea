/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const comData = [
      { title: 'Чай выглядит не очень! Но только визуально! На вкус - топ!', userId: 2, teaId: 1 },
      { title: 'Похудела на 100500 кг за один прием!', userId: 2, teaId: 4 },
      { title: 'Вшторило не по-детски!', userId: 2, teaId: 5 },
    ];
    const com = comData.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('Comments', com);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Comments', null, {});
  },
};
