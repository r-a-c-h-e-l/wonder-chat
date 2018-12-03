import React from 'react';
import PropTypes from 'prop-types';
import MessageItem from './MessageItem';

const Messages = ({ messages }) => {
  return (
    <div className="messagesContainer">
      {messages.map((_message, idx) => {
        return (
          <MessageItem
            key={idx}
            message={_message.message}
            author={_message.authorName}
            authorId={_message.authorId}
          />
        )
      })}
    </div>
  )
}

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      message: PropTypes.string,
      author: PropTypes.string,
    })
  )
}

export default Messages;
