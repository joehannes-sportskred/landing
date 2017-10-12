import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { ACTION, ANIMATION, LINKS, TEXT } from '../../assets/data/enum';

const Component = ({ active, onActivate }) => (
  <Button.Group fluid>
    <Button secondary onClick={() => onActivate(ACTION.DIMMER.LOG_IN)}>
      {TEXT.LOG_IN.TITLE}
    </Button>
    <Button.Or />
    <Button primary onClick={() => (onActivate(ACTION.DIMMER.SIGN_UP))}>
      {TEXT.SIGN_UP.TITLE}
    </Button>
  </Button.Group>
);

Component.propTypes = {
  active: PropTypes.string.isRequired,
  onActivate: PropTypes.func.isRequired,
}

export default Component;
