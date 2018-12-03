import { takeEvery } from 'redux-saga/effects'
import {
  ADD_MESSAGE,
} from '../Store/actionTypes';

const handleMessage = function* handleMessage(params) {
  console.log("IN Sagas/index, params: ", params);
  yield takeEvery(ADD_MESSAGE, (action) => {
    console.log('Sagas/index: add_message action: ', action);
    params.socket.send(JSON.stringify(action))
  })
}

export default handleMessage
