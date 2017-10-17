import { connect } from 'react-redux';

import { activateVideo } from '../actions';
import Component from '../../components/common/video_icons';

const mapStateToProps = (state, ownProps) => ({ active: state.video || 0 });
const mapDispatchToProps = (dispatch, ownProps) => ({ onActivate: v => dispatch(activateVideo(v)) });

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default Container;
