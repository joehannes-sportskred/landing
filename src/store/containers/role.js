import { connect } from 'react-redux';

import { setRole as action } from '../actions';
import Component from '../../components/common/role';

const mapStateToProps = (state, ownProps) => ({ active: state.role || 'about' });
const mapDispatchToProps = (dispatch, ownProps) => ({ onActivate: role => dispatch(action(role)) });

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default Container;
