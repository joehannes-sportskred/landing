import React from 'react';
import PropTypes from 'prop-types';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { connect } from 'react-redux';
import { Sidebar, Menu, Icon, Button } from 'semantic-ui-react';

import { disableHistory } from '../actions';

import { TEXT } from '../../assets/data/enum';

const UndoRedo = ({ visible, canUndo, onUndo }) => (
  <Sidebar as={Menu} animation="push" direction="top" visible={visible} inverted>
    <Menu.Item position="right">
      <Icon name="undo" />
      <Button secondary onClick={onUndo} disabled={!canUndo}>
        {TEXT.SNACKBAR.BUTTON.BACK}
      </Button>
    </Menu.Item>
  </Sidebar>
);

UndoRedo.propTypes = {
  visible: PropTypes.bool.isRequired,
  canUndo: PropTypes.bool.isRequired,
  onUndo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    canUndo: state.dimmer.past.length > 0,
    visible: !!state.undoable,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUndo: () => {
      dispatch(UndoActionCreators.undo());
      dispatch(disableHistory());
    },
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UndoRedo);

export default Container;
