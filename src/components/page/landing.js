import React, { Component } from 'react';
import { Container, Grid, Image, Responsive } from 'semantic-ui-react';

import Menu from '../../store/containers/menu';

import Dimmer from '../../store/containers/dimmer';
import AboutUs from '../../store/containers/aboutus';

import FlexContainer from '../layout/container';
import LayoutGoldenRatio from '../layout/goldenratio';
import LayoutRighty from '../layout/righty';
import LayoutLefty from '../layout/lefty';
import LayoutCentered from '../layout/centered';
import LayoutCenteredWide from '../layout/centeredwide';
import LayoutBalanced from '../layout/balanced';
import LayoutRailedCenteredWide from '../layout/railedcenteredwide';

import Content from './landing/primary';
// import TeamContent from './landing/secondary';
// import WhyContent from './landing/tertiary';
// import HowContent from './landing/quaternary';

import { IMG } from '../../assets/data/enum';

const Page = () => (
  <FlexContainer>
    <LayoutRailedCenteredWide
      content={Content}
      className="main landing page"
    />
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
  </FlexContainer>
);

export default Page;
