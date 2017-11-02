
import { connect } from 'react-redux';

import { toggleSidebarMenuAboutus, setSidebarMenuAboutusWhichActive } from '../actions';

import Component from '../../components/common/aboutus';

const mapStateToProps_M = (state, ownProps) => ({ active: state.sidebarMenuAboutusVisibility });
const mapDispatchToProps_M = (dispatch, ownProps) => ({ onActivate: () => dispatch(toggleSidebarMenuAboutus()) });

const mapStateToProps_S = (state, ownProps) => ({
  active: state.sidebarMenuAboutusVisibility,
  activeWhich: state.sidebarMenuAboutusActive || "",
});
const mapDispatchToProps_S = (dispatch, ownProps) => ({
  onActivate: (s) => {
    dispatch(setSidebarMenuAboutusWhichActive(s));
    dispatch(toggleSidebarMenuAboutus());
  },
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
