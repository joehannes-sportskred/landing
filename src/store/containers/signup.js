import { connect } from 'react-redux';

import { setRole, activateDimmer, deactivateDimmer, enableHistory, APIPayload, APICall } from '../actions';

import Component from '../../components/page/dimmer/signup';

import { ACTION } from '../../assets/data/enum';

const mapStateToProps = (state, ownProps) => ({
  active: state.role || 'about',
  apiData: state.api,
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  onSwitch: (action) => {
    dispatch(activateDimmer(action));
    dispatch(enableHistory());
  },
  onActivate: (form) => {
    dispatch(activateDimmer(ACTION.DIMMER.LOADING));
    dispatch(APICall({ type: ACTION.API_METHOD.API_SIGN_UP, subType: form }));
  },
  onDeactivate: () => dispatch(deactivateDimmer()),
  onChangeRole: role => dispatch(setRole(role)),
  onPayloadUpdate: (payloadPart) => dispatch(APIPayload({ type: ACTION.API.SIGN_UP, payload: payloadPart })),
});

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default Container;
