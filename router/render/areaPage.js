const areaRouter = require('express').Router();
const db = require('../../db/models');
const adminPage = require('../../view/AdminPage');
const userPage = require('../../view/UserPage');

areaRouter.get('/', async (req, res) => {
  const { user } = res.locals;
  if (user.role === 'admin') {
    try {
      const teas = await db.Tea.findAll({
        raw: true,
      });
      res.renderComponent(adminPage, { teas });
    } catch ({ message }) {
      res.send(message);
    }
  } else {
    try {
      const comments = await db.Comment.findAll({
        include: [db.Comment.Tea, db.Comment.User],
        where: { userId: user.id },
        order: [['createdAt', 'DESC']],
        ofset: 0,
        limit: 3,
        raw: true,
      });
      console.log(comments);
      res.renderComponent(userPage, { comments });
    } catch ({ message }) {
      res.send(message);
    }
  }
});

module.exports = areaRouter;
