const React = require('react');

function CommentCard({ com }) {
  return (
    <div className="comments" data-id={com.id}>
      <div>{`${com.title}`}</div>
      <div className="comUser">{`${com['User.login']}`}</div>
    </div>
  );
}

module.exports = CommentCard;
