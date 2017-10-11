import React from 'react';
import { Icon, Button, Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import SocialIcons from './socialicons';

import { LINKS, TEXT } from '../../assets/data/enum';

const Component = () => (
  <Menu as="nav" fluid size="large" className="bottom about menu">
    <Menu.Item as="article">
      <SocialIcons />
    </Menu.Item>
    <Menu.Item as="article" style={{ display: 'inline-flex', flexGrow: 1 }}>
      <Button fluid primary>
        See Sportskred in Action
      </Button>
    </Menu.Item>
    <Menu.Menu as="article" position="right">
      <Menu.Item as="section">
        <Link to={LINKS.LEGAL.TERMS_OF_USE}>
          {TEXT.TOU.TITLE}
        </Link>
      </Menu.Item>
      <Menu.Item as="section">
        <Link to={LINKS.LEGAL.PRIVACY_POLICY}>
          {TEXT.PP.TITLE}
        </Link>
      </Menu.Item>
      <Menu.Item as="article">
        {TEXT.COPYRIGHT}
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default Component;
