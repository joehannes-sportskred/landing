import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import SocialIcons from './socialicons';
import InAction from './inaction';

import { LINKS, TEXT } from '../../assets/data/enum';

const Component = () => (
  <Menu as="nav" fixed="bottom" fluid size="large" className="bottom about menu">
    <Menu.Item as="article">
      <SocialIcons />
    </Menu.Item>
    <Menu.Item as="article" style={{ display: 'inline-flex', flexGrow: 1 }}>
      <InAction />
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
      <Menu.Item as="section">
        {TEXT.COPYRIGHT}
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default Component;
