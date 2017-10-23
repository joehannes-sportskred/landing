import React from 'react';
import PropTypes from 'prop-types';
import Scroll from 'react-scroll';
import { Container, Grid, Header, Image, Visibility } from 'semantic-ui-react';

import Dimmer from '../../store/containers/dimmer';

import Menu from '../common/menu';
import AboutUs from '../common/aboutus';
import Content from './tour/marketeer';

import LayoutGoldenRatio from '../layout/goldenratio';
import LayoutRighty from '../layout/righty';
import LayoutRightyVery from '../layout/rightyvery';
import LayoutLefty from '../layout/lefty';
import LayoutCentered from '../layout/centered';
import LayoutCenteredWide from '../layout/centeredwide';

import { ROLE, TOUR, DATA, IMG } from '../../assets/data/enum';

const AbstractPage = ({ Theme, Slogan, ConcreteContent, Layout }) => (
  <Layout content={ConcreteContent} className="main tour page" />
);

AbstractPage.propTypes = {
  Theme: PropTypes.string.isRequired,
  Slogan: PropTypes.any.isRequired,
  ConcreteContent: PropTypes.any.isRequired,
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
          <AbstractPage Layout={LayoutRightyVery} Theme={ROLE.BRAND.name} Slogan={TOUR.BRAND.SLOGAN} ConcreteContent={Content.Home} />
          <AbstractPage Layout={LayoutRighty} Theme={ROLE.BRAND.name} Slogan={TOUR.BRAND.SLOGAN} ConcreteContent={Content.Discover} />
          <AbstractPage Layout={LayoutLefty} Theme={ROLE.BRAND.name} Slogan={TOUR.BRAND.SLOGAN} ConcreteContent={Content.Choose} />
          <AbstractPage Layout={LayoutRighty} Theme={ROLE.BRAND.name} Slogan={TOUR.BRAND.SLOGAN} ConcreteContent={Content.Reach} />
          <AbstractPage Layout={LayoutLefty} Theme={ROLE.BRAND.name} Slogan={TOUR.BRAND.SLOGAN} ConcreteContent={Content.Measure} />
          <AbstractPage Layout={LayoutCentered} Theme={ROLE.BRAND.name} Slogan={TOUR.BRAND.SLOGAN} ConcreteContent={Content.Action} />
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
