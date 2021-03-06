import { connect } from 'react-redux';

import { deactivateDimmer } from '../actions';

import Component from '../../components/page/dimmer';

const mapStateToProps = (state, ownProps) => ({
  dimmer: state.dimmer,
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  onDeactivate: () => dispatch(deactivateDimmer())
});

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default Container;
