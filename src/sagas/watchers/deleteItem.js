import { put, takeLatest, call } from 'redux-saga/effects';

import { DELETE_ITEM } from '../../constants';
import { setUsers } from '../../actions';
import { deleteItem } from '../../lib/api';

function* workerdeleteItem(data) {
  console.log('qsdfffff',data);
  const users = yield call(deleteItem, data.data);
  yield put(setUsers(users));
}

export default function* watchdeleteItem() {
  yield takeLatest(DELETE_ITEM, workerdeleteItem);
}
