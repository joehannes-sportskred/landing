import { connect } from 'react-redux';

import Component from '../../components/common/dynamiclogo';

const mapStateToProps = (state, ownProps) => ({ logoType: (state.logoType.replace(' ', '_') || 'about') });
const mapDispatchToProps = (dispatch, ownProps) => ({});

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default Container;
