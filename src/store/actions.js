import { ACTION } from '../assets/data/enum';

export const setRole = role => ({
  type: ACTION.ROLE,
  role,
});
export const activateDimmer = type => ({ type });
export const deactivateDimmer = () => ({ type: ACTION.DIMMER.OFF });
export const enableHistory = () => ({ type: ACTION.UNDO.ENABLE });
export const disableHistory = () => ({ type: ACTION.UNDO.DISABLE });
