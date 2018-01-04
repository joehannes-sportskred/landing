import { connect } from 'react-redux';

import { activateDimmer, deactivateDimmer, APICall, APIPayload, enableHistory } from '../actions';

import Component from '../../components/page/dimmer/login';

import { ACTION } from '../../assets/data/enum';

const mapStateToProps = (state, ownProps) => {
  return {
    apiData: state.api,
  };
}
const mapDispatchToProps = (dispatch, ownProps) => ({
  onSwitch: (action) => {
    dispatch(activateDimmer(action));
    dispatch(enableHistory());
  },
  onActivate: () => {
    dispatch(activateDimmer(ACTION.DIMMER.LOADING));
    dispatch(APICall({ type: ACTION.API_METHOD.API_SIGN_UP }));
  },
  onDeactivate: () => dispatch(deactivateDimmer()),
  onPayloadUpdate: (payloadPart) => dispatch(APIPayload({ type: ACTION.API.LOG_IN, payload: payloadPart })),
});

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default Container;
