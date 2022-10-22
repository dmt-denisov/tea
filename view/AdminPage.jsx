const React = require('react');
const Layout = require('./Layout');
const Header = require('./Header');
const AdminCard = require('./AdminCard');

function adminPage({ title, user, teas }) {
  return (
    <Layout title={title}>
      <Header user={user} />
      <script defer src="/js/addTea.js" />
      <script defer src="/js/deleteTea.js" />
      <main className="teaBlock" role="main">
        <div className="container js-teas-container">
          <div className="d-flex justify-content-center flex-wrap m-3" id="teas">
            {teas.map((tea) => (
              <AdminCard key={tea.id} tea={tea} />
            ))}
          </div>
        </div>
        <div className="containerInput">
          <h1 className="tea__title">Добавить чай</h1>
          <form method="POST" action="/personalArea" className="add">
            <div className="mb-3 loginTable">
              <input type="text" name="name" placeholder="Название" />
              <input type="test" name="title" placeholder="Описание" />
              <input type="text" name="picture" placeholder="Изображение" />
              <input type="text" name="coordinateX" placeholder="Координата Х" />
              <input type="text" name="coordinateY" placeholder="Координата Y" />
              <button type="submit" className="btn btn-primary mt-3 send">Отправить</button>
            </div>
          </form>
          <div className="err-log" />
        </div>
      </main>
    </Layout>
  );
}

module.exports = adminPage;
