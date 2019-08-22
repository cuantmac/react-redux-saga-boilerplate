import { GET_USERS_SAGA, SET_USERS, GET_DETAIL } from '../constants';

export function setUsers(users) {
  console.log('555');
  return {
    type: SET_USERS,
    users
  };
}

//Sagas
export function getUsersSaga() {
  console.log('222');
  return {
    type: GET_USERS_SAGA
  };
}

//Sagas
export function getDetail() {
  return {
    type: GET_DETAIL
  };
}
