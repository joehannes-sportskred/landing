import React from 'react';
import PropTypes from 'prop-types';

import { Button, Divider, Header, Icon, Menu, Sidebar } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Steps from './steps';
import Logo from './dynamiclogo';
import Roles from '../../store/containers/role';
import Actions from '../../store/containers/landingactions';
import ContextFAB from '../../store/containers/contextfab';

import MENU from '../../assets/data/mobilemenu';

const Primary = () => (
  <Menu as="nav" fixed="top" fluid size="large" className="main navigation">
    <Menu.Item name="about">
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

const Mobile = {
  Menu: ({ active, onActivate }) => (
    <Menu as="nav" fixed="top" fluid size="large" className="main navigation">
      <Menu.Item name="about">
        <Logo logoType="light" />
      </Menu.Item>
      <Menu.Menu position="right">
        <Button
          circular
          primary
          icon="sidebar"
          onClick={() => onActivate(!active)}
        />
      </Menu.Menu>
    </Menu>
  ),
  Sidebar: ({ active, activeWhich, onActivate }) => (
    <Sidebar as={Menu} animation="scale down" direction="top" width="thin" visible={active} vertical inverted>
      <Menu inverted vertical fluid className="tinted">
        {MENU.HOME.map((item, i) => {
          return item.DIVIDER ?
            <Divider key={"divider" + i} horizontal inverted /> :
            (
              <Menu.Item header key={item.TITLE} name={item.ACTION} active={activeWhich === item.ACTION} onClick={() => onActivate(item.ACTION)}>
                <Icon name={item.ICON} />
                {item.TITLE}
              </Menu.Item>
            );
        })}
      </Menu>
    </Sidebar>
  ),
};

Mobile.Menu.propTypes = {
  active: PropTypes.bool.isRequired,
  onActivate: PropTypes.func.isRequired,
}

Mobile.Sidebar.propTypes = {
  active: PropTypes.bool.isRequired,
  activeWhich: PropTypes.any.isRequired,
  onActivate: PropTypes.func.isRequired,
}

const Component = {
  Primary,
  Mobile,
};

export default Component;
