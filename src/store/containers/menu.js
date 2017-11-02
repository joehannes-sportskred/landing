
import { connect } from 'react-redux';

import { toggleSidebarMenuMain, setSidebarMenuMainWhichActive } from '../actions';

import Component from '../../components/common/menu';

const mapStateToProps_M = (state, ownProps) => ({ active: state.sidebarMenuMainVisibility });
const mapDispatchToProps_M = (dispatch, ownProps) => ({ onActivate: () => dispatch(toggleSidebarMenuMain()) });

const mapStateToProps_S = (state, ownProps) => ({
  active: state.sidebarMenuMainVisibility,
  activeWhich: state.sidebarMenuMainWhichActive || "",
});
const mapDispatchToProps_S = (dispatch, ownProps) => ({
  onActivate: (s) => {
    dispatch(setSidebarMenuMainWhichActive(s));
    dispatch(toggleSidebarMenuMain());
  }
});

const Container = {
  Primary: Component.Primary,
  Mobile: {
    Menu: connect(
      mapStateToProps_M,
      mapDispatchToProps_M,
    )(Component.Mobile.Menu),
    Sidebar: connect(
      mapStateToProps_S,
      mapDispatchToProps_S,
    )(Component.Mobile.Sidebar),
  }
};

export default Container;
