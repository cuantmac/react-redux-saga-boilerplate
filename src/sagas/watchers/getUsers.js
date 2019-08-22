import { put, takeLatest, call } from 'redux-saga/effects';

import { GET_USERS_SAGA } from '../../constants';
import { setUsers } from '../../actions';
import { getUsers } from '../../lib/api';

function* workerGetUsersSaga() {
  console.log('444');
  const users = yield call(getUsers);
  yield put(setUsers(users));
  console.log('666');
}

export default function* watchGetUsersSaga() {
  console.log('333');
  yield takeLatest(GET_USERS_SAGA, workerGetUsersSaga);
}
