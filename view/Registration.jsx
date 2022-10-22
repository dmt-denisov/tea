const React = require('react');
const Layout = require('./Layout');
const Header = require('./Header');

module.exports = function Registration({ title }) {
  return (
    <Layout title={title}>
      <Header />
      <script defer src="/js/regist.js" />
      <div className="registblock container">
        <h1>Регистрация</h1>
        <form className="regForm" method="POST" action="api/registration">
          <div className="mb-3 regisTable">
            <input type="text" name="login" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите ваш Логин" />
            <input type="email" name="email" className="form-control" id="exampleInputPassword1" placeholder="Введите ваш email" />
            <input type="password" placeholder="Введите ваш пароль" name="password" className="form-control beauty-input" />
            <input type="password" placeholder="Повторите ваш пароль" name="confirm" className="form-control beauty-input" />
            <button type="submit" className="btn btn-primary btnlogin">Отправить</button>
          </div>
        </form>
        <div className="err-reg" />
      </div>
    </Layout>
  );
};
