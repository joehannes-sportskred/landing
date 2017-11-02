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
  switch (action.type) {
    case ACTION.VIDEO.PROVIDER.YOUTUBE:
      return action.video || (!!action.status ? state : 0);
    default:
      return state;
  }
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
      return action.type;
    case ACTION.SIDEBAR_MENU.MAIN.WHICH:
      return action.status || state;
    default:
      return state;
  }
};

const sidebarMenuMainVisibility = (state = false, action) => {
  switch (action.type) {
    case ACTION.SIDEBAR_MENU.MAIN.ACTIVE:
      return !state;
    default:
      return state;
  }
}


const sidebarMenuMainActive = (state = null, action) => {
  switch (action.type) {
    case ACTION.SIDEBAR_MENU.MAIN.WHICH:
      return action.status || state;
    default:
      return state;
  }
}

const sidebarMenuAboutusVisibility = (state = false, action) => {
  switch (action.type) {
    case ACTION.SIDEBAR_MENU.ABOUT_US.ACTIVE:
      return !state;
    default:
      return state;
  }
}

const sidebarMenuAboutusActive = (state = null, action) => {
  switch (action.type) {
    case ACTION.SIDEBAR_MENU.MAIN.WHICH:
      return action.status || state;
    default:
      return state;
  }
}


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
  sidebarMenuMainVisibility,
  sidebarMenuAboutusVisibility,
});

export default rootReducer;
