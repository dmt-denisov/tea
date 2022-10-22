const userRouter = require('express').Router();
const db = require('../../db/models');
const userPage = require('../../view/UserPage');

userRouter.get('/', async (req, res) => {
  try {
    const { user } = res.locals;
    const comments = await db.Comment.findAll({
      where: { userId: user.id },
      order: [['createdAt', 'DESC']],
      ofset: 0,
      limit: 3,
      raw: true,
    });
    res.renderComponent(userPage, { comments });
  } catch ({ message }) {
    res.send(message);
  }
});

module.exports = userRouter;
