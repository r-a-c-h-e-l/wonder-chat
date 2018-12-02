import { createStore } from 'redux';
import chat from './reducers';


const chatStore = createStore(chat);

const unsubscribe = chatStore.subscribe(() => console.log(chatStore.getState()));
export default chatStore;
