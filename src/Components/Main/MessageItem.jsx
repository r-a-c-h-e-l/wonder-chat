import React from 'react';
import PropTypes from 'prop-types';

const MessageItem = ({ message, author }) => {
  return (
    <div className="messageItemContainer">
      <span className="messageItemAuthor">{`${author}: `}</span>
      <span className="messageItemContent">{message}</span>
    </div>
  )
}

MessageItem.propTypes = {
  text: PropTypes.string,
  author: PropTypes.string,
}

export default MessageItem;
