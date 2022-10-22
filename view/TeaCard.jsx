const React = require('react');

function TeaCard({ tea }) {
  return (

    <article className="card js-tea">
      <h4 className="card__title">
        <a className="cardLink" href={`/tea/${tea.id}`} data-id={`${tea.id}`}>
          {tea.name || 'Noname'}
        </a>
      </h4>
      <img className="card_picture" src={tea.picture} alt={tea.name} />
      <p>
        About:
        {' '}
        {tea.title}
      </p>
    </article>

  );
}

module.exports = TeaCard;
