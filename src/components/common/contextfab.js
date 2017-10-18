import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Button } from 'semantic-ui-react';

const Component = ({ active, onActivate }) => (
  <Menu.Menu className={active ? 'fab-menu active' : 'fab-menu'}>
    <Menu.Item className="fab-trigger">
      <Button circular primary icon="sidebar" onClick={() => onActivate(!active)} />
    </Menu.Item>
    <Menu.Item className="fab-item">
      <Button icon="mail" content="Contact Us" />
    </Menu.Item>
    <Menu.Item className="fab-item">
      <Button icon="newspaper" content="Blog" />
    </Menu.Item>
  </Menu.Menu>
);

Component.propTypes = {
  active: PropTypes.bool.isRequired,
  onActivate: PropTypes.func.isRequired,
};

export default Component;
