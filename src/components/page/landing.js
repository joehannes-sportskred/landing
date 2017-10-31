import React, { Component } from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';
import { Responsive } from '../../vendor/semantic-addons/Responsive'

import Dimmer from '../../store/containers/dimmer';
import Menu from '../common/menu';
import AboutUs from '../common/aboutus';

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
    <Responsive as={Menu.Primary} minWidth={768} />
    <Responsive as={Menu.Mobile} maxWidth={767} />
    <AboutUs />
    <Dimmer />
  </FlexContainer>
);

export default Page;
