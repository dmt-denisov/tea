/* eslint-disable jsx-a11y/label-has-associated-control */
const React = require('react');
const Layout = require('./Layout');
const Header = require('./Header');
const CommentCard = require('./CommentCard');

function ChaiPage({ tea, user, comments }) {
  return (
    <Layout>
      <Header user={user} />
      <div id="teaBlock">
        <img className="rounded mx-auto d-block" src={`${tea.picture}`} alt={`${tea.name}`} />
        <p className="text-center">{`${tea.name}`}</p>
        <p>{`${tea.title}`}</p>
        <div className="commentsFromDb">
          <h2>Комментарии</h2>
          {
            comments.map((com) => (
              <CommentCard key={com.id} com={com} />
            ))
          }

        </div>

        {(user ? (
          <form method="POST" action={`/tea/${tea.id}`} className="m-3 addCom">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Комментарий:</label>
            <textarea className="form-control" name="text" id="exampleFormControlTextarea1" rows="3" />
            <button className="btn btn-primary mt-3" type="submit">Отправить комментарий</button>
          </form>
        ) : (<div />))}

      </div>
    </Layout>
  );
}

module.exports = ChaiPage;
