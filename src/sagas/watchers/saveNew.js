import { put, takeLatest, call } from 'redux-saga/effects';
import { SAVE_DATA } from '../../constants';
import { saveNewData } from '../../lib/api';
import {afterSave} from "../../actions";

function* SaveNewData(data) {
    const res = yield call(saveNewData, data);
    console.log('456', res);
    yield put(afterSave(res));
}

export default function* watchSaveNewData() {
    yield takeLatest(SAVE_DATA, SaveNewData);
}
