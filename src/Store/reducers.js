import { combineReducers } from 'redux'
import {
  ADD_USER,
  REMOVE_USER,
  ADD_MESSAGE,
} from './actionTypes';

// reducers
function addUser(state, payload) {
  const userId = payload.id;
  const newState = new Map(state);
  newState.set(userId, payload)
  return newState;
  // const newState = state.set(userCount, payload);
  // return new Map([...state, ...newState]);
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
function users(state = new Map(), action) {
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

const chatApp = combineReducers({
  users,
  messages,
});

export default chatApp;
