const React = require('react');

module.exports = function Header({ user }) {
  return (
    (!user ? (
      <div className="navbar header">
        <img className="logo" id="logo" src="/img/logo.png" alt="logo" />
        <a href="/" className="headerlink">На главную</a>
        <a href="/login" className="headerlink">Войти</a>
        <a href="/registration" className="headerlink">Зарегистрироваться</a>
      </div>
    ) : (
      <div className="navbar header">
        <img className="logo" id="logo" src="/img/logo.png" alt="logo" />
        <a href="/personalArea" className="headerlink">Личный кабинет</a>
        <a href="/" className="headerlink">На главную</a>
        <a href="/api/logout" className="headerlink" id="logout">Выйти</a>
      </div>
    ))
  );
};
