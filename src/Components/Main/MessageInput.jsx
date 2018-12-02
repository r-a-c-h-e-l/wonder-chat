import React from 'react';
import PropTypes from 'prop-types';

const ENTER = 13;

const MessageInput = ({ onSubmit, author }) => {
  let input
  function onKeyDownHandler(e) {
    // for now authorId will be the static (1)
    // consider using context for user, so that all components may know user information
    const message = { authorId: author.id, text: e.target && e.target.value, authorName: author.name}
    if (e.keyCode === ENTER) {
      onSubmit(message)
      input.value = '';
    }
  }

  return (
    <div className="messageInputContainer">
      <input
        className="messageInput"
        onKeyDown={onKeyDownHandler}
        type="text"
        autoFocus
        name="messageInput"
        ref={(node) => input = node}
      />
    </div>
  );
}

MessageInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default MessageInput;
