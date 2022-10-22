const indexRouter = require('express').Router();

// GET /
indexRouter.get('/', (req, res) => {
  res.redirect('/tea');
});

module.exports = indexRouter;
