import { combineReducers } from 'redux';

import usersReducer from './users';
import saveNewDataReducer from './saveData';

export default combineReducers({
  usersReducer,
  saveNewDataReducer
});
