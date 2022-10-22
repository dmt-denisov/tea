const React = require('react');

function AdminCard({ tea }) {
  return (
    <div className="p-2 js-tea" data-id={tea.id}>
      <img className="pictureCard" src={`${tea.picture}`} alt={`${tea.name}`} />
      {' '}
      <br />
      <a className="tea-name" href={`/tea/${tea.id}`}>{tea.name}</a>
      {' '}
      <br />

      <button className="btn btn-primary js-delete">Delete</button>
    </div>
  );
}
module.exports = AdminCard;
