const React = require('react');
const Layout = require('./Layout');
const Header = require('./Header');

function userPage({ title, user, comments }) {
  return (
    <Layout title={title}>
      <Header user={user} />
      <main role="main">
        <div className="containerInputUser">
          {/* <h3 className="tea__title">
            Добро пожаловать,
            {' '}
            {`${comments[0]['User.login']}`}
            !
          </h3> */}
          <h6 className="tea__title">Ваши последние комментарии</h6>

          <ul className="list-group">

            {
              comments.map((comment) => (
                <li className="list-group-item" key={comment.id}>
                  <span><a href={`/tea/${comment.teaId}`}>{`${comment['Tea.name']}`}</a></span>
                  <br />
                  <span className="comment-title">{comment.title}</span>
                </li>
              ))
            }
          </ul>
        </div>
      </main>
    </Layout>
  );
}

module.exports = userPage;
