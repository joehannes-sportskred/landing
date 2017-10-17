import { connect } from 'react-redux';

import { setVideoStatus } from '../actions';
import Component from '../../components/common/player';

const mapStateToProps = (state, ownProps) => ({
  active: state.videoStatus || false,
  video: state.video || 0,
  poster: state.video || 0,
});
const mapDispatchToProps = (dispatch, ownProps) => ({ onActivate: b => dispatch(setVideoStatus(b)) });

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default Container;
