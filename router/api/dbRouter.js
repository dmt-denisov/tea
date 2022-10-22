const dbRouter = require('express').Router();
const db = require('../../db/models');

dbRouter.get('/', async (req, res) => {
  try {
    const teas = await db.Tea.findAll({
      attributes: ['name', 'id', 'picture', 'title', 'coordinateX', 'coordinateY'],
      raw: true,
    });
    res.json({ teas });
    // console.log(teas);
  } catch ({ message }) {
    res.send({ message });
  }
});

module.exports = dbRouter;
