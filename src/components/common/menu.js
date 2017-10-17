import React from 'react';
import PropTypes from 'prop-types';

import { Button, Icon, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Steps from './steps';
import Logo from './dynamiclogo';
import Roles from '../../store/containers/role';
import Actions from '../../store/containers/landingactions';

const AbstractComponent = ({ SubMenu }) => (
  <Menu as="nav" fluid size="large" className="main navigation">
    <Menu.Item name="about" active>
      <Logo logoType="dark" />
    </Menu.Item>
    <SubMenu />
    <Menu.Menu position="right">
      <Menu.Item>
        <Actions />
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

AbstractComponent.propTypes = {
  SubMenu: PropTypes.func.isRequired,
};

const Primary = () => (
  <Menu.Menu className="fab-menu">
    <Menu.Item className="fab-trigger">
      <Button circular primary icon="sidebar" />
    </Menu.Item>
    <Menu.Item className="fab-item">
      <Button circular icon="mail" />
    </Menu.Item>
    <Menu.Item className="fab-item">
      <Button circular icon="newspaper" />
    </Menu.Item>
  </Menu.Menu>
);

const Tour = () => (
  <Steps />
);

const Component = {
  Bare: ({ Dynamic }) => <AbstractComponent SubMenu={Dynamic} />,
  Primary: () => <AbstractComponent SubMenu={Primary} />,
  Tour: () => <AbstractComponent SubMenu={Tour} />,
};

export default Component;
