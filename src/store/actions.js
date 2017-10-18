import { ACTION } from '../assets/data/enum';

export const setRole = role => ({
  type: ACTION.ROLE,
  role,
});
export const activateDimmer = type => ({ type });
export const deactivateDimmer = () => ({ type: ACTION.DIMMER.OFF });
export const enableHistory = () => ({ type: ACTION.UNDO.ENABLE });
export const disableHistory = () => ({ type: ACTION.UNDO.DISABLE });
export const activateVideo = video => ({ type: ACTION.VIDEO.PROVIDER.YOUTUBE, video });
export const setVideoStatus = status => ({ type: ACTION.VIDEO.PROVIDER.YOUTUBE, status });
export const setFabStatus = status => ({ type: ACTION.MENU.FAB, status });
