import { put, takeLatest, call } from 'redux-saga/effects';
import { SAVE_DATA } from '../../constants';
import { saveNewData } from '../../lib/api';

function* SaveNewData(data) {
    const res = yield call(saveNewData, data);
    console.log('444', data);
    console.log('555', res);
}

export default function* watchSaveNewData() {
    yield takeLatest(SAVE_DATA, SaveNewData);
}
