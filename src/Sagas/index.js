import { takeEvery } from 'redux-saga/effects'
import {
  ADD_MESSAGE,
} from '../Store/actionTypes';

const handleMessage = function* handleMessage(params) {
  yield takeEvery(ADD_MESSAGE, (action) => {
    params.socket.send(JSON.stringify(action))
  })
}

export default handleMessage
