import {
  ADD_USER,
  REMOVE_USER,
  ADD_MESSAGE,
} from './actionTypes';

let userCount = 0;
let messageCount = 0;


// action creators
export function addUser(user) {
  return {
    type: ADD_USER,
    payload: {
      id: userCount++,
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
