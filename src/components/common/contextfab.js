import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const Component = ({ active, onActivate }) => (
  <Menu.Menu className={active ? 'fab-menu active' : 'fab-menu'}>
    <Menu.Item className="fab-trigger">
      <Button circular primary icon="sidebar" onClick={() => onActivate(!active)} />
    </Menu.Item>
    <Menu.Item className="fab-item">
      <Button as="a" icon="mail" content="Contact Us" href="mailto:team@sportskred.com" />
    </Menu.Item>
    <Menu.Item className="fab-item">
      <Link to="/blog">
        <Button icon="newspaper" content="Blog" />
      </Link>
    </Menu.Item>
  </Menu.Menu>
);

Component.propTypes = {
  active: PropTypes.bool.isRequired,
  onActivate: PropTypes.func.isRequired,
};

export default Component;
