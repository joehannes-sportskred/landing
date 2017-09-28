import React from 'react';
import PropTypes from 'prop-types';

import { Icon, Step } from 'semantic-ui-react';

import { TOUR } from '../../assets/data/enum';

const Component = () => (
  <Step.Group>
    {TOUR.BRAND.STEPS.ICONS.map(i => (
      <Step key={'step_' + i.icon}>
        <Icon name={i.icon} />
      </Step>
    ))}
  </Step.Group>
);

export default Component;
