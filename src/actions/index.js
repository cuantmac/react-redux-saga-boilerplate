import { GET_USERS_SAGA, SET_USERS, GET_DETAIL } from '../constants';

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

//Sagas
export function getDetail(id) {
  console.log('999', id);
  return {
    type: GET_DETAIL,
    id
  };
}
