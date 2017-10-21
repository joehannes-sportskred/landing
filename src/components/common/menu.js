import React from 'react';
import PropTypes from 'prop-types';

import { Button, Icon, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Steps from './steps';
import Logo from './dynamiclogo';
import Roles from '../../store/containers/role';
import Actions from '../../store/containers/landingactions';
import ContextFAB from '../../store/containers/contextfab';

const AbstractComponent = ({ SubMenu }) => (
  <Menu as="nav" fixed="top" fluid size="large" className="main navigation">
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

const Primary = () => <ContextFAB />;

const Tour = () => <Steps />;

const Component = {
  Bare: ({ Dynamic }) => <AbstractComponent SubMenu={Dynamic} />,
  Primary: () => <AbstractComponent SubMenu={Primary} />,
  Tour: () => <AbstractComponent SubMenu={Tour} />,
};

export default Component;
