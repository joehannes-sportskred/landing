import { connect } from 'react-redux';

import { activateDimmer } from '../actions';
import Component from '../../components/common/landingactions';

const mapStateToProps = (state, ownProps) => ({ active: state.role || 'about' });
const mapDispatchToProps = (dispatch, ownProps) => ({ onActivate: role => dispatch(activateDimmer(role)) });

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default Container;
