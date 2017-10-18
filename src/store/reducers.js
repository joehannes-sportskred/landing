import { combineReducers } from 'redux';
import addHistory, { distinctState } from 'redux-undo';

import { ACTION, VIDEO } from '../assets/data/enum';

const role = (state = 'about', action) => {
  switch (action.type) {
    case ACTION.ROLE:
      return action.role;
    default:
      return state;
  }
};

const video = (state = 0, action) => {
  return action.type == ACTION.VIDEO.PROVIDER.YOUTUBE ? (action.video || state) : state;
}

const contextfab = (state = false, action) => {
  switch (action.type) {
    case ACTION.MENU.FAB:
      return typeof action.status !== 'undefined' ? action.status : state;
    default:
      return state;
  }
}

const videoStatus = (state = false, action) => {
  return action.type == ACTION.VIDEO.PROVIDER.YOUTUBE ? !!action.status : state;
}

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
  videoStatus,
  video,
  contextfab,
});

export default rootReducer;
