import {
  ADD_USER,
  REMOVE_USER,
  ADD_MESSAGE,
  SET_AUTHOR,
  SET_USER_LIST,
} from './actionTypes';

let messageCount = 0;

// action creators
export function addUser(user) {
  console.log("ACTIONCREATOR: ", user);
  return {
    type: ADD_USER,
    payload: {
      id: user.id,
      name: user.name,
    }
  }
}

export function setUserList(users) {
  return {
    type: SET_USER_LIST,
    payload: users,
  }
}

export function removeUser(user) {
  return {
    type: REMOVE_USER,
    payload: {
      id: user.id,
    }
  }
}

export function addMessage(_message) {
  const { message, authorId, authorName } = _message;
  return {
    type: ADD_MESSAGE,
    payload: {
      id: messageCount++,
      message,
      authorId,
      authorName,
    }
  }
}

export function setAuthor(user) {
  return {
    type: SET_AUTHOR,
    payload: {
      id: user.id,
      name: user.name,
    }
  }
}

// // websocket actionCreator
//
// export function incomingMessage(message) {
//   return {}
// }
