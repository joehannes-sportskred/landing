import React from 'react';
import PropTypes from 'prop-types';
import { Button, Reveal } from 'semantic-ui-react';
import { withRouter, Link } from 'react-router-dom';

import { LINKS, TEXT } from '../../assets/data/enum';

const Component = ({ history }) => (
  <Reveal animated='move up' style={{ width: '100%' }}>
    <Reveal.Content visible style={{ width: '100%' }}>
      <Button fluid primary>
        {TEXT.INACTION.MAIN}
      </Button>
    </Reveal.Content>
    <Reveal.Content hidden style={{ width: '100%' }}>
      <Button.Group fluid>
        <Button negative onClick={() => history.push(`/${LINKS.INACTION.BRAND}`)}>
          {TEXT.INACTION.BRAND}
        </Button>
        <Button.Or />
        <Button onClick={() => history.push(`/${LINKS.INACTION.ATHLETE}`)}>
          {TEXT.INACTION.ATHLETE}
        </Button>
      </Button.Group>
    </Reveal.Content>
  </Reveal>
);

Component.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default withRouter(Component);
