import { combineReducers } from 'redux'

// import actions
// initialState
// write reducers


function users(state = [], action) {
  return state;
}

function messages(state = [], action) {
  return state;
}

const chatApp = combineReducers({
  users,
  messages,
});

export default chatApp;
