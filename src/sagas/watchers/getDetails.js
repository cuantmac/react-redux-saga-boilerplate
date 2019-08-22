import { put, takeLatest, call } from 'redux-saga/effects';

import { GET_DETAIL } from '../../constants';
import { setUsers } from '../../actions';
import { getDetails } from '../../lib/api';

function* workerGetDetails() {
  const users = yield call(getDetails);
  yield put(setUsers(users));
}

export default function* watchGetDetails() {
  yield takeLatest(GET_DETAIL, workerGetDetails);
}
