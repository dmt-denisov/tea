const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const logUser = await User.findOne({ where: { email } });
  if (logUser) {
    const validPassword = await bcrypt.compare(password, logUser.password);
    if (validPassword) {
      req.session.user_id = logUser.id;
      return res.json({ status: 'success' });
    }
  }
  return res.status(404).json({ status: 'error', message: 'Неправильный адрес электронной почты или пароль' });
});

router.get('/logout', async (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      res.status(500).json({ message: 'Ошибка удаления сессии' });
    }
    res.clearCookie('user_sid');
    res.redirect('/');
  });
});
module.exports = router;
