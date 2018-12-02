import React from 'react';
import PropTypes from 'prop-types';
import { addMessage } from '../../Store/actions';

const ENTER = 13;

const MessageInput = ({ dispatch }) => {
  let input
  function onKeyDownHandler(e) {
    // for now authorId will be the static (1)
    // consider using context for user, so that all components may know user information
    const message = { authorId: 1, text: e.target && e.target.value }
    if (e.keyCode === ENTER) {
      dispatch(addMessage(message))
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
  dispatch: PropTypes.func.isRequired,
}

export default MessageInput;
