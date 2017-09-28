import { connect } from 'react-redux';

import { deactivateDimmer } from '../actions';

import Component from '../../components/page/dimmer/reset';

const mapStateToProps = (state, ownProps) => ({});
const mapDispatchToProps = (dispatch, ownProps) => ({
  onActivate: () => alert('Password Request Sent'),
  onDeactivate: () => dispatch(deactivateDimmer()),
});

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default Container;
