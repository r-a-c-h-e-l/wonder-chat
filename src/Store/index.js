import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import chatReducers from './reducers';
import handleMessage from '../Sagas';
import initializeSocket from '../websocketClient';

const sagaMiddleware = createSagaMiddleware();
const chatStore = createStore(
  chatReducers,
  applyMiddleware(sagaMiddleware)
);

const author = chatStore.getState().author;
const socket = initializeSocket(chatStore.dispatch, author);


sagaMiddleware.run(handleMessage, { socket })
export default chatStore;
