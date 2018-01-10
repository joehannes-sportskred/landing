import { connect } from 'react-redux';

import {activateDimmer, deactivateDimmer, APIPayload, APICall } from '../actions';

import Component from '../../components/page/dimmer/reset';

import { ACTION } from '../../assets/data/enum';

const mapStateToProps = (state, ownProps) => {
  return {
    apiData: state.api,
  };
}
const mapDispatchToProps = (dispatch, ownProps) => ({
  onActivate: () => {
    dispatch(activateDimmer(ACTION.DIMMER.LOADING));
    dispatch(APICall({ type: ACTION.API_METHOD.API_RESET, subType: "" }));
  }
,
  onDeactivate: () => dispatch(deactivateDimmer()),
  onPayloadUpdate: (payloadPart) => dispatch(APIPayload({ type: ACTION.API.RESET, payload: payloadPart })),
});

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default Container;
