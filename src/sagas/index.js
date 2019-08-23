import { all, fork } from 'redux-saga/effects';

import watchGetUsersSaga from './watchers/getUsers';
import watchGetDetails from './watchers/getDetails';
import watchSaveNewData from './watchers/saveNew';
import watchmodifyItem from './watchers/modifyItem';

export default function* root() {
  yield all([
    fork(watchGetUsersSaga),
    fork(watchGetDetails),
    fork(watchSaveNewData),
    fork(watchmodifyItem),
  ]);
}
