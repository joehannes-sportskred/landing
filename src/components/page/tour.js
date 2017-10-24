import React from 'react';
import PropTypes from 'prop-types';
import Scroll from 'react-scroll';
import { Container, Grid, Header, Image, Visibility } from 'semantic-ui-react';

import Dimmer from '../../store/containers/dimmer';

import Menu from '../common/menu';
import AboutUs from '../common/aboutus';
import Marketeer from './tour/marketeer';
import Athlete from './tour/athlete';

import LayoutGoldenRatio from '../layout/goldenratio';
import LayoutRighty from '../layout/righty';
import LayoutRightyVery from '../layout/rightyvery';
import LayoutLefty from '../layout/lefty';
import LayoutLeftyVery from '../layout/leftyvery';
import LayoutCentered from '../layout/centered';
import LayoutCenteredWide from '../layout/centeredwide';

import { ROLE, TOUR, DATA, IMG } from '../../assets/data/enum';

const AbstractPage = ({ Theme, Slogan, ConcretePage, Layout }) => (
  <Layout content={ConcretePage} className="main tour page" />
);

AbstractPage.propTypes = {
  Theme: PropTypes.string.isRequired,
  Slogan: PropTypes.any.isRequired,
  ConcretePage: PropTypes.any.isRequired,
  Layout: PropTypes.any.isRequired,
};

const Page = {
  Marketeer: () => (
    <Container fluid as="main" className="main tour marketeer page">
      <Grid stretched verticalAlign="middle">
        <Grid.Row style={{ maxHeight: '64px' }}>
          <Menu.Primary />
        </Grid.Row>
        <Grid.Row stretched verticalAlign="middle">
          <AbstractPage Layout={LayoutRightyVery} Theme={ROLE.BRAND.name} Slogan={TOUR.BRAND.SLOGAN} ConcretePage={Marketeer.Home} />
          <AbstractPage Layout={LayoutRighty} Theme={ROLE.BRAND.name} Slogan={TOUR.BRAND.SLOGAN} ConcretePage={Marketeer.Discover} />
          <AbstractPage Layout={LayoutLefty} Theme={ROLE.BRAND.name} Slogan={TOUR.BRAND.SLOGAN} ConcretePage={Marketeer.Choose} />
          <AbstractPage Layout={LayoutRighty} Theme={ROLE.BRAND.name} Slogan={TOUR.BRAND.SLOGAN} ConcretePage={Marketeer.Reach} />
          <AbstractPage Layout={LayoutLefty} Theme={ROLE.BRAND.name} Slogan={TOUR.BRAND.SLOGAN} ConcretePage={Marketeer.Measure} />
          <AbstractPage Layout={LayoutCentered} Theme={ROLE.BRAND.name} Slogan={TOUR.BRAND.SLOGAN} ConcretePage={Marketeer.Action} />
        </Grid.Row>
        <Grid.Row style={{ bottom: 0, position: 'absolute' }}>
          <AboutUs />
        </Grid.Row>
      </Grid>
      <Dimmer />
    </Container>
  ),
  Athlete: () => (
    <Container fluid as="main" className="main tour athlete page">
      <Grid stretched verticalAlign="middle">
        <Grid.Row style={{ maxHeight: '64px' }}>
          <Menu.Primary />
        </Grid.Row>
        <Grid.Row stretched verticalAlign="middle">
          <AbstractPage Layout={LayoutRightyVery} Theme={ROLE.ATHLETE.name} Slogan={TOUR.ATHLETE.SLOGAN} ConcretePage={Athlete.Home} />
          <AbstractPage Layout={LayoutRightyVery} Theme={ROLE.ATHLETE.name} Slogan={TOUR.ATHLETE.SLOGAN} ConcretePage={Athlete.Profile} />
          <AbstractPage Layout={LayoutLeftyVery} Theme={ROLE.ATHLETE.name} Slogan={TOUR.ATHLETE.SLOGAN} ConcretePage={Athlete.BeDiscovered} />
          <AbstractPage Layout={LayoutRighty} Theme={ROLE.ATHLETE.name} Slogan={TOUR.ATHLETE.SLOGAN} ConcretePage={Athlete.Monetise} />
          <AbstractPage Layout={LayoutLefty} Theme={ROLE.ATHLETE.name} Slogan={TOUR.ATHLETE.SLOGAN} ConcretePage={Athlete.Focus} />
          <AbstractPage Layout={LayoutCentered} Theme={ROLE.ATHLETE.name} Slogan={TOUR.ATHLETE.SLOGAN} ConcretePage={Athlete.Action} />
        </Grid.Row>
        <Grid.Row style={{ bottom: 0, position: 'absolute' }}>
          <AboutUs />
        </Grid.Row>
      </Grid>
      <Dimmer />
    </Container>
  ),
};

export default Page;
