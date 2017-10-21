import React, { Component } from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';

import Dimmer from '../../store/containers/dimmer';

import Menu from '../common/menu';
import AboutUs from '../common/aboutus';

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
  <Container fluid as="main">
    <Grid stretched verticalAlign="middle">
      <Grid.Row style={{ maxHeight: '64px' }}>
        <Menu.Primary />
      </Grid.Row>
      <Grid.Row stretched verticalAlign="middle">
        <LayoutRailedCenteredWide
          content={Content}
          className="main landing page"
        />
      </Grid.Row>
      <Grid.Row style={{ bottom: 0, position: 'absolute' }}>
        <AboutUs />
      </Grid.Row>
    </Grid>
    <Dimmer />
  </Container>
);

export default Page;
