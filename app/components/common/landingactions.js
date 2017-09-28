import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { ACTION, ANIMATION, LINKS, TEXT } from '../../assets/data/enum';

const Component = ({ active, onActivate }) => (
  <Button.Group fluid>
    <Button animated={active !== 'about' ? false : ANIMATION.STD.BUTTON} primary>
      <Button.Content visible>
        <Link to={LINKS.TOUR}>
          &nbsp;&nbsp;&nbsp;{TEXT.TOUR.TITLE}&nbsp;&nbsp;&nbsp;
        </Link>
      </Button.Content>
      <Button.Content hidden>
        {TEXT.ROLE.TITLE}
      </Button.Content>
    </Button>
    <Button.Or />
    <Button animated={active !== 'about' ? false : ANIMATION.STD.BUTTON} primary onClick={() => (active !== 'about' && onActivate(ACTION.DIMMER.SIGN_UP))}>
      <Button.Content visible>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{TEXT.SIGN_UP.TITLE}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </Button.Content>
      <Button.Content hidden>
        {TEXT.ROLE.TITLE}
      </Button.Content>
    </Button>
    <Button.Or />
    <Button positive onClick={() => onActivate(ACTION.DIMMER.LOG_IN)}>
      {TEXT.LOG_IN.TITLE}
    </Button>
  </Button.Group>
);

Component.propTypes = {
  active: PropTypes.string.isRequired,
  onActivate: PropTypes.func.isRequired,
}

export default Component;
