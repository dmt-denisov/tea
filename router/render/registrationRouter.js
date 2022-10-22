const router = require('express').Router();
const Registration = require('../../view/Registration');

router.get('/', (req, res) => {
  res.renderComponent(Registration, { title: 'Registration' });
});

module.exports = router;
