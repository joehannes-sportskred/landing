import { combineReducers } from 'redux';
import addHistory, { distinctState } from 'redux-undo';

import { ACTION } from '../assets/data/enum';

const role = (state = 'about', action) => {
  switch (action.type) {
    case ACTION.ROLE:
      return action.role;
    default:
      return state;
  }
};

const dimmer = (state = ACTION.DIMMER.OFF, action) => {
  switch (action.type) {
    case ACTION.DIMMER.SIGN_UP:
    case ACTION.DIMMER.LOG_IN:
    case ACTION.DIMMER.RESET:
    case ACTION.DIMMER.TERMS_OF_USE:
    case ACTION.DIMMER.OFF:
      console.log(action.type);
      return action.type;
    default:
      return state;
  }
};

const undoable = (state = false, action) => {
  switch (action.type) {
    case ACTION.UNDO.ENABLE:
      return true;
    case ACTION.UNDO.DISABLE:
      return false;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  role,
  dimmer: addHistory(dimmer, { filter: distinctState() }),
  undoable,
});

export default rootReducer;
