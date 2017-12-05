import React, { Component } from 'react';
import { Container, Grid, Image, Responsive } from 'semantic-ui-react';

import Menu from '../../store/containers/menu';

import Dimmer from '../../store/containers/dimmer';
import AboutUs from '../../store/containers/aboutus';

import FlexContainer from '../common/container';

import LayoutCentered from '../layout/centered';
import LayoutCenteredWide from '../layout/centeredwide';

import Content from './blog/gist';

import { IMG } from '../../assets/data/enum';

const Page = () => (
  <main>
    <FlexContainer className="main blog container">
      <LayoutCenteredWide
        content={Content}
        className="main blog page"
      />
    </FlexContainer>
    <Responsive minWidth={768}>
      <Menu.Primary />
      <AboutUs.Primary />
    </Responsive>
    <Responsive maxWidth={767}>
      <Menu.Mobile.Menu />
      <Menu.Mobile.Sidebar />
      <AboutUs.Mobile.Menu />
      <AboutUs.Mobile.Sidebar />
    </Responsive>
    <Dimmer />
  </main>
);

export default Page;
