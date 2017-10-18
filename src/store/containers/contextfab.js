import { connect } from 'react-redux';

import { setFabStatus } from '../actions';
import Component from '../../components/common/contextfab';

const mapStateToProps = (state, ownProps) => ({ active: state.contextfab || false });
const mapDispatchToProps = (dispatch, ownProps) => ({ onActivate: state => dispatch(setFabStatus(state)) });

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default Container;
