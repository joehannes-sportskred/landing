import { connect } from 'react-redux';

import { activateDimmer, deactivateDimmer, enableHistory } from '../actions';

import { ACTION } from '../../assets/data/enum';

import Component from '../../components/page/dimmer/login';

const mapStateToProps = (state, ownProps) => ({});
const mapDispatchToProps = (dispatch, ownProps) => ({
  onSwitch: (action) => {
    dispatch(activateDimmer(action));
    dispatch(enableHistory());
  },
  onActivate: () => alert('LOGGING IN'),
  onDeactivate: () => dispatch(deactivateDimmer()),
});

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default Container;
