
import { createUndoMiddleware } from 'redux-undo-redo';

import { ACTION } from '../assets/data/enum';

const defaultReverter = {
  action: (action, { past }) => ({ type: past }),
  meta: (state, future ) => ({ past: state.dimmer, future: future.type || future }),
};

export default createUndoMiddleware({
  revertingActions: {
    [ACTION.DIMMER.SIGN_UP]: {...defaultReverter},
    [ACTION.DIMMER.LOG_IN]:  {...defaultReverter},
    [ACTION.DIMMER.RESET]:  {...defaultReverter},
    [ACTION.DIMMER.TERMS_OF_USE]:  {...defaultReverter},
    [ACTION.DIMMER.LOADING]:  {...defaultReverter},
    [ACTION.DIMMER.OFF]:  {...defaultReverter},
    [ACTION.API.ERROR]: {...defaultReverter},
    [ACTION.SIDEBAR_MENU.MAIN.WHICH]: {...defaultReverter},
  },
});
