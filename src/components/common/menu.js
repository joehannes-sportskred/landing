import React from 'react';
import PropTypes from 'prop-types';

import { Button, Icon, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Steps from './steps';
import Logo from './dynamiclogo';
import Roles from '../../store/containers/role';
import Actions from '../../store/containers/landingactions';
import ContextFAB from '../../store/containers/contextfab';

const Primary = () => (
  <Menu as="nav" fixed="top" fluid size="large" className="main navigation">
    <Menu.Item name="about" active>
      <Logo logoType="light" />
    </Menu.Item>
    <ContextFAB />
    <Menu.Menu position="right">
      <Menu.Item>
        <Actions />
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

Primary.propTypes = {
  SubMenu: PropTypes.func.isRequired,
};

const Mobile = ({ onActivate, active }) => {
  <Menu as="nav" fixed="top" fluid size="large" className="main navigation">
    <Menu.Item name="about" active>
      <Logo logoType="light" />
    </Menu.Item>
    <Menu.Menu position="right">
      <Button circular primary icon="sidebar" onClick={() => onActivate(!active)} />
    </Menu.Menu>
  </Menu>
}

const Component = {
  Primary,
  Mobile,
};

export default Component;
