import { createStore } from 'redux';
import chat from './reducers';

const chatStore = createStore(chat);
export default chatStore;
