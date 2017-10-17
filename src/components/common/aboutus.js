import React from 'react';
import { Icon, Button, Menu, Segment, Reveal } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import SocialIcons from './socialicons';

import { LINKS, TEXT } from '../../assets/data/enum';

const Component = () => (
  <Menu as="nav" fluid size="large" className="bottom about menu">
    <Menu.Item as="article">
      <SocialIcons />
    </Menu.Item>
    <Menu.Item as="article" style={{ display: 'inline-flex', flexGrow: 1 }}>
      <Reveal animated='fade' style={{ width: '100%' }}>
        <Reveal.Content visible style={{ width: '100%' }}>
          <Button fluid primary>
            See Sportskred in Action
          </Button>
        </Reveal.Content>
        <Reveal.Content hidden style={{ width: '100%' }}>
          <Button.Group fluid>
            <Button negative>
              As a Brand
            </Button>
            <Button.Or />
            <Button>
              As an Athlete
            </Button>
          </Button.Group>
        </Reveal.Content>
      </Reveal>
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
