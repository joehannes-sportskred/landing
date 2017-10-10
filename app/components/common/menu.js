import React from 'react';
import PropTypes from 'prop-types';

import { Button, Icon, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Steps from './steps';
import Roles from '../../store/containers/role';
import Actions from '../../store/containers/landingactions';
import Logo from '../../store/containers/dynamiclogo';

const AbstractComponent = ({ SubMenu }) => (
  <Menu as="nav" fluid pointing size="large" className="main navigation">
    <Menu.Item name="about" active>
      <Logo logoType="light" />
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
  <Menu.Menu>
    <Menu.Item>
      <Button circular primary icon="facebook" />
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
