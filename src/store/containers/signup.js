import { connect } from 'react-redux';

import { setRole, activateDimmer, deactivateDimmer, enableHistory } from '../actions';

import Component from '../../components/page/dimmer/signup';

const mapStateToProps = (state, ownProps) => ({
  active: state.role || 'about',
  apiData: state.api,
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  onSwitch: (action) => {
    dispatch(activateDimmer(action));
    dispatch(enableHistory());
  },
  onActivate: () => {
    dispatch(activateDimmer(ACTION.DIMMER.LOADING));
    dispatch(APICall(ACTION.API_METHOD.API_SIGN_UP));
  },
  onDeactivate: () => dispatch(deactivateDimmer()),
  onChangeRole: role => dispatch(setRole(role)),
});

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default Container;
