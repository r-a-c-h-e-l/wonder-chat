import React from 'react';
import PropTypes from 'prop-types';

const MessageItem = ({ message, author, authorId }) => {
  const isAdmin = authorId === 'admin';
  const adminClass = isAdmin ? 'admin' :  '';
  return (
    <div className={`messageItemContainer ${adminClass}`}>
      {!isAdmin && <span className="messageItemAuthor">{`${author}: `}</span>}
      <span className="messageItemContent">{message}</span>
    </div>
  )
}

MessageItem.propTypes = {
  text: PropTypes.string,
  author: PropTypes.string,
}

export default MessageItem;
