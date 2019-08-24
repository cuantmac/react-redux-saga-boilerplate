import { put, takeLatest, call } from 'redux-saga/effects';

import { MODIFY_ITEM } from '../../constants';
import { setUsers } from '../../actions';
import { modifyItem } from '../../lib/api';

function* workermodifyItem(data) {
  const users = yield call(modifyItem, data.id, data.data);
  yield put(setUsers(users));
}

export default function* watchmodifyItem() {
  yield takeLatest(MODIFY_ITEM, workermodifyItem);
}
