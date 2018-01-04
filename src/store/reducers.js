import { combineReducers } from 'redux';
import { undoHistoryReducer } from 'redux-undo-redo';

import { ACTION, VIDEO, ROLE } from '../assets/data/enum';

const role = (state, action) => {
  switch (action.type) {
    case ACTION.ROLE:
      return action.role;
    default:
      return state || ROLE['COMPANY/BRAND'].name;
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

const api = (state, action) => {
  switch (action.type) {
    case ACTION.API.LOG_IN:
    case ACTION.API.SIGN_UP:
    case ACTION.API.RESET:
      return {
        ...(state || {}),
        [action.type]: {
          ...(state && state[action.type] || {}),
          ...action.payload,
        }
      };
    default:
      return state || {};
  }
}

const response = (state, action) => {
  switch (action.type) {
    case ACTION.API_METHOD.LOG_IN:
    case ACTION.API_METHOD.SIGN_UP:
    case ACTION.API_METHOD.RESET:
      return {
        ...(state || {}),
        [action.type]: {
          ...(state && state[action.type] || {}),
          ...action.response,
        }
      };
    default:
      return state || {};
  }
}

const dimmer = (state, action) => {
  switch (action.type) {
    case ACTION.DIMMER.SIGN_UP:
    case ACTION.DIMMER.LOG_IN:
    case ACTION.DIMMER.RESET:
    case ACTION.DIMMER.TERMS_OF_USE:
    case ACTION.DIMMER.LOADING:
    case ACTION.DIMMER.OFF:
      return action.type;
    case ACTION.SIDEBAR_MENU.MAIN.WHICH:
      return action.status || state || ACTION.DIMMER.OFF;
    case ACTION.API.ERROR:
      return state; //ACTION.DIMMER.OFF;
    default:
      return state || ACTION.DIMMER.OFF;
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
  api,
  response,
  role,
  dimmer,
  undoable,
  videoStatus,
  video,
  contextfab,
  sidebarMenuMainVisibility,
  sidebarMenuAboutusVisibility,
  undoHistory: undoHistoryReducer,
});

export default rootReducer;
