import { combineReducers } from 'redux'
import {
  ADD_USER,
  REMOVE_USER,
  ADD_MESSAGE,
  SET_AUTHOR,
  SET_USER_LIST,
  SET_MESSAGE,
} from './actionTypes';
import uuid from 'uuid/v4';

const uniqueId = uuid();
const nut = ['macadamia', 'walnut', 'pine nut', 'pistachio', 'pecan', 'hazelnut', 'almond', 'cashew'][Math.floor((Math.random() * 6))];
const initialAuthorState = { id: uniqueId, name: `anonymous ${nut}`}
// const initialUserState = [[ uniqueId, initialAuthorState]]

// reducers
function setAuthor(state, payload) {
  return Object.assign(state, payload);
}

function addUser(state, payload) {
  const userId = payload.id;
  const newState = new Map(state);
  newState.set(userId, payload)
  return newState;
}

function setUserList(state, payload) {
  const newState = new Map(payload)
  return new Map([...state, ...newState]);
}

function removeUser(state, payload) {
  const userId = payload.id;
  const newState = new Map(state);
  newState.delete(userId);
  return newState;
}

function addMessage(state, payload) {
  return [ ...state, payload ];
}

// reducer composition, slicing state
export const users = (state = new Map(), action) => {
  switch (action.type) {
    case ADD_USER:
      return addUser(state, action.payload)
    case SET_USER_LIST:
      return setUserList(state, action.payload)
    case REMOVE_USER:
      return removeUser(state, action.payload)
    default:
      return state
  }
}

export const messages = (state = [], action) => {
  switch(action.type) {
    case ADD_MESSAGE:
    case SET_MESSAGE:
      return addMessage(state, action.payload)
    default:
      return state
  }
}

export const author = (state = initialAuthorState, action) => {
  switch(action.type) {
    case SET_AUTHOR:
      return setAuthor(state, action.payload)
    default:
      return state
  }
}

const chatApp = combineReducers({
  users,
  messages,
  author,
});

export default chatApp;
