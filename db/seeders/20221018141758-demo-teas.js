/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const teaData = [
      {
        name: 'Пуэр', title: 'Пуэр - постферментированный чай. Отличается специфической технологией производства: собранные листья, обработанные до уровня зелёного чая, подвергаются процедуре микробной ферментации — естественному либо искусственному (ускоренному) старениюю', picture: 'https://besttea.ru/images/watermarked/1/detailed/44/7_0fy3-yl.jpg', coordinateX: '29.647535', coordinateY: '91.117525',
      },

      {
        name: 'Тегуаньинь', title: 'Тегуаньинь - полуферментированный чай улун, занимающий промежуточное положение между зелёными чаями и красными.  В Китае этот чай относят к сине-зелёным (или бирюзовым). Тегуаньинь — крупнолистовой чай. Для его производства лист собирают более зрелый, чем для зелёного чая. Слабая ферментация сохраняет витамины и танин, активизирует кофеин и создаёт условия для образования новых эфирных масел и соединений, придающих чаю своеобразный вкус и особо сильный пряно-фруктовый аромат.', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Tieguanyin2.jpg/800px-Tieguanyin2.jpg?20090211010956', coordinateX: '26.10078', coordinateY: '119.295144',
      },

      {
        name: 'Да хун пао', title: 'Да хун пао - Большой Красный Халат», утёсный китайский чай, который производят на северо-западе провинции Фуцзянь, в горах Уи. По классу его относят к улунам средней ферментации или полуферментированным улунам.', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Da_Hong_Pao_Oolong_tea_leaf_close.jpg/274px-Da_Hong_Pao_Oolong_tea_leaf_close.jpg', coordinateX: '36.620938', coordinateY: '101.780251',
      },

      {
        name: 'Масала', title: 'Масала -  апиток родом с Индийского субконтинента, получаемый путём заваривания чая со смесью индийских специй и трав.', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Masala_Chai.JPG/274px-Masala_Chai.JPG', coordinateX: '7.89059', coordinateY: '98.3981',
      },

      {
        name: 'Матча', title: 'Матча - это японский зеленый чай, растертый в порошок. По-японски он называется маття, а в нашей транскрипции матча. Этот чай традиционно используется в японской чайной церемонии. Особенности выращивания и приготовления позволяют этому напитку сохранять огромное количество полезных веществ.', picture: 'https://legend-tea.ru/upload/medialibrary/a93/a930c6a34d80c2e0bb9a3d361a6ed217.jpg', coordinateX: '24.4752847', coordinateY: '101.3431058',
      },

      {
        name: 'Мате', title: 'Мате - это парагвайский напиток из высушенных и измельчённых листьев падуба парагвайского или так называемого падуба тернистого, или кустистого. Его широко употребляют в странах Южной Америки.   Мате оказывает тонизирующее действие на центральную нервную систему за счёт содержания кофеина.', picture: 'https://zavarka.life/wp-content/uploads/2019/03/%D0%BC%D0%B0%D1%82%D0%B5.jpg', coordinateX: '-34.615689', coordinateY: '-58.435104',
      },

      {
        name: 'Сенча', title: 'Сенча - это разновидность японского рекуча (зеленый чай), который готовится путем настаивания обработанных целых чайных листьев в горячей воде. Это в отличие от матча, порошкообразного японского зеленого чая, где порошок зеленого чая смешивается с горячей водой и, следовательно, сам лист включается в напиток. Сенча - самый популярный чай в Японии.', picture: 'https://zavarka.life/wp-content/uploads/2019/03/%D1%81%D0%B5%D0%BD%D1%87%D0%B0.jpeg', coordinateX: '35.681700', coordinateY: '139.753882',
      },

    ];

    const teas = teaData.map((tea) => ({
      ...tea,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('Teas', teas);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Teas');
  },
};
