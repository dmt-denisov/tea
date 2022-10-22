const addTeaRouter = require('express').Router();
const db = require('../../db/models');
const AdminCard = require('../../view/AdminCard');

addTeaRouter.post('/', async (req, res) => {
  try {
    const tea = req.body;
    const newTea = await db.Tea.create({
      name: tea.name,
      title: tea.title,
      picture: tea.picture,
      coordinateX: tea.coordinateX,
      coordinateY: tea.coordinateY,
    });
    await newTea.save();
    res.renderComponent(AdminCard, { tea: newTea }, { doctype: false });
  } catch ({ message }) {
    console.log(message);
  }
});

module.exports = addTeaRouter;
