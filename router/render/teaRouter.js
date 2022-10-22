const teaRouter = require('express').Router();
const TeaPage = require('../../view/Main');
const ChaiPage = require('../../view/Chaipage');
const CommentCard = require('../../view/CommentCard');

const db = require('../../db/models');

teaRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const { user } = res.locals;
  const tea = await db.Tea.findOne({ where: { id } });
  const comments = await db.Comment.findAll({
    include: db.Comment.User,
    where: { teaId: id },
    raw: true,
  });
  res.renderComponent(ChaiPage, { tea, user, comments }, { doctype: false });
});

teaRouter.get('/', async (req, res) => {
  try {
    const { user } = res.locals;
    const teas = await db.Tea.findAll({
      attributes: ['name', 'id', 'picture', 'title'],
      raw: true,
    });
    res.renderComponent(TeaPage, { user, teas });
  } catch ({ message }) {
    res.send({ message });
  }
});

teaRouter.delete('/:id', async (req, res) => {
  const { user } = res.locals;
  if (user.role !== 'admin') {
    res.sendStatus(403);
    return;
  }
  
  try {
    await db.Tea.destroy({ where: { id: req.params.id } });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

teaRouter.post('/:id', async (req, res) => {
  try {
    const { text } = req.body;
    const { id } = req.params;
    const { user } = res.locals;
    const newCom = await db.Comment.create({
      title: text,
      userId: user.id,
      teaId: id,
    });
    await newCom.save();
    const finalCom = await db.Comment.findOne({
      include: db.Comment.User,
      where: { userId: user.id, title:text },
      raw: true,
    });
    res.renderComponent(CommentCard, { com: finalCom }, { doctype: false });
  } catch ({ message }) {
    console.log(message);
  }
});

module.exports = teaRouter;
