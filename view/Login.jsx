const React = require('react');
const Layout = require('./Layout');
const Header = require('./Header');

module.exports = function Login({ title}) {
  return (
    <Layout title={title}>
      <Header />
      <script defer src="/js/login.js" />
      <div className="loginblock container">
        <h1>Авторизация</h1>
        <form method="POST" action="api/login" className="logForm">
          <div className="mb-3 loginTable">
            <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите ваш email" />
            <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Введите ваш пароль" />
            <button type="submit" className="btn btn-primary btnlogin">Отправить</button>
          </div>
        </form>
        <div className="err-log" />
      </div>
    </Layout>
  );
};
