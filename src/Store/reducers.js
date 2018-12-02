import { combineReducers } from 'redux'
import {
  ADD_USER,
  REMOVE_USER,
  ADD_MESSAGE,
  SET_AUTHOR,
} from './actionTypes';
import uuid from 'uuid/v4';

const uniqueId = uuid;
const nut = ['macadamia', 'walnut', 'pine nut', 'pistachio', 'pecan', 'hazelnut'][Math.floor((Math.random() * 6))];
const initialAuthorState = { id: uniqueId, name: `anonymous ${nut} (you)`}
const initialUserState = [[ uniqueId, initialAuthorState]]

// reducers
function setAuthor(state, payload) {
  return Object.assign({}, state, { author: payload });
}

function addUser(state, payload) {
  const userId = payload.id;
  const newState = new Map(state);
  newState.set(userId, payload)
  return newState;
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
function users(state = new Map(initialUserState), action) {
  switch (action.type) {
    case ADD_USER:
      return addUser(state, action.payload)
    case REMOVE_USER:
      return removeUser(state, action.payload)
    default:
      return state
  }
}

function messages(state = [], action) {
  switch(action.type) {
    case ADD_MESSAGE:
      return addMessage(state, action.payload)
    default:
      return state
  }
}

function author(state = initialAuthorState, action){
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
