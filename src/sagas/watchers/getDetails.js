import { put, takeLatest, call } from 'redux-saga/effects';

import { GET_DETAIL } from '../../constants';
import { setUsers } from '../../actions';
import { getDetails } from '../../lib/api';

function* workerGetDetails(data) {
  const users = yield call(getDetails, data.id);
  yield put(setUsers(users));
}

export default function* watchGetDetails() {
  yield takeLatest(GET_DETAIL, workerGetDetails);
}
