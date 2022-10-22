const router = require('express').Router();
const Login = require('../../view/Login');

router.get('/', (req, res) => {
  const { user } = res.locals;
  res.renderComponent(Login, { title: 'Login', user });
});

module.exports = router;
