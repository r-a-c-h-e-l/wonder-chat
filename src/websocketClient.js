import {
  ADD_USER,
  ADD_MESSAGE,
  SET_USER_LIST,
} from './Store/actionTypes';
import { setUserList, setMessage } from './Store/actionCreators';

const setupSocket = (dispatch, user) => {
  const socket = new WebSocket('ws://localhost:8989')
  socket.onopen = () => {
    socket.send(JSON.stringify({
      type: ADD_USER,
      ...user,
    }))
  }
  socket.onmessage = (event) => {
    const data = JSON.parse(event.data)
    switch (data.type) {
      case ADD_MESSAGE:
        const { message, authorId, authorName, id} = data.payload;
        dispatch(setMessage({ message, authorId, authorName, id }))
        break
      case SET_USER_LIST:
        dispatch(setUserList(data.users))
        break
      default:
        break
    }
  }
  return socket
}

export default setupSocket
