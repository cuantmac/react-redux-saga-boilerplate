import {GET_USERS_SAGA, SET_USERS, GET_DETAIL, SAVE_DATA, AFTER_SAVE} from '../constants';

export function setUsers(users) {
    return {
        type: SET_USERS,
        users
    };
}

//Sagas
export function getUsersSaga() {
    return {
        type: GET_USERS_SAGA
    };
}

export function getDetail(id) {
    console.log('999', id);
    return {
        type: GET_DETAIL,
        id
    };
}

export function saveCreate(data) {
    return {
        type: SAVE_DATA,
        data
    };
}

export function afterSave(res) {
    return {
        type: AFTER_SAVE,
        res
    };
}
