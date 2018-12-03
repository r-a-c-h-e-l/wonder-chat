import {
  ADD_USER,
  REMOVE_USER,
  ADD_MESSAGE,
  SET_AUTHOR,
  SET_USER_LIST,
  SET_MESSAGE,
} from './actionTypes';

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

export function addMessage(message) {
  return {
    type: ADD_MESSAGE,
    payload: {
      ...message,
    }
  }
}

export function setMessage(message) {
  return {
    type: SET_MESSAGE,
    payload: {
      ...message,
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
