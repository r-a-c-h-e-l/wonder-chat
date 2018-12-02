import {
  ADD_USER,
  REMOVE_USER,
  ADD_MESSAGE,
  SET_AUTHOR,
} from './actionTypes';
// import uuid from 'uuid/v4';

let messageCount = 0;
// const uniqueId = () => { return uuid() };

// action creators
export function addUser(user) {
  return {
    type: ADD_USER,
    payload: {
      id: user.id,
      name: user.name,
    }
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

export function addMessage(message) {
  return {
    type: ADD_MESSAGE,
    payload: {
      id: messageCount++,
      message: message.text,
      authorId: message.authorId,
      authorName: message.authorName,
    }
  }
}

export function setAuthor(user) {
  return {
    type: SET_AUTHOR,
    payload: {
      id: user.id
    }
  }
}

// // websocket actionCreator
//
// export function incomingMessage(message) {
//   return {}
// }
