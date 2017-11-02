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
export const toggleSidebarMenuMain = () => ({ type: ACTION.SIDEBAR_MENU.MAIN.ACTIVE });
export const setSidebarMenuMainWhichActive = status => ({ type: ACTION.SIDEBAR_MENU.MAIN.WHICH, status });
export const toggleSidebarMenuAboutus = () => ({ type: ACTION.SIDEBAR_MENU.ABOUT_US.ACTIVE });
export const setSidebarMenuAboutusWhichActive = status => ({ type: ACTION.SIDEBAR_MENU.ABOUT_US.WHICH, status });
