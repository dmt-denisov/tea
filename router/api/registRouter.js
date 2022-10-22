const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

router.post('/registration', async (req, res) => {
  const {
    login, email, role, password, confirm,
  } = req.body;
  try {
    if (!login.trim() || !email.trim() || !password.trim() || !confirm.trim()) {
      return res.status(404).json({ status: 'error', message: 'Пожалуйста заполните все поля' });
    }
    if (login.length > 30 || password.length > 30) {
      return res.status(404).json({ status: 'error', message: 'Логин и пароль не должны содержать более 30 символов' });
    }
    const user = await User.findOne({ where: { email } });
    if (user) {
      return res.status(404).json({ status: 'error', message: 'Пользователь с таким email уже существует!' });
    }
    if (password.length < 8) {
      return res.status(404).json({ status: 'error', message: 'Пароль должен содержать более 8 символов' });
    }
    if (password === confirm) {
      const hash = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        login, email, role, password: hash,
      });
      req.session.user_id = newUser.id;
      return res.json({ status: 'success', url: '/' });
    }
    return res.status(404).json({ status: 'error', message: 'Пароли не совпадают' });
  } catch (err) {
    return res.status(500).json({ status: 'error', message: `${err.message}` });
  }
});

module.exports = router;
