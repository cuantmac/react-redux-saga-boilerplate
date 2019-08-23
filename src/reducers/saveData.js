import {AFTER_SAVE, SAVE_DATA} from '../constants';

const initialState = { res: [] };

export default function setBrowserInfo(state = initialState, action) {
  switch (action.type) {
    case AFTER_SAVE:
      return {
        ...state,
        res: action.res
      };
    default:
      return state;
  }
}
