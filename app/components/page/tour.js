import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Image } from 'semantic-ui-react';

import Dimmer from '../../store/containers/dimmer';

import Menu from '../common/menu';
import AboutUs from '../common/aboutus';
import Content from './tour/brand';

import LayoutGoldenRatio from '../layout/goldenratio';
import LayoutRighty from '../layout/righty';
import LayoutRightyVery from '../layout/rightyvery';
import LayoutLefty from '../layout/lefty';
import LayoutCentered from '../layout/centered';
import LayoutCenteredWide from '../layout/centeredwide';

import { ROLE, TOUR, DATA, IMG } from '../../assets/data/enum';

const AbstractPage = ({ Layout, Theme, Slogan, ConcreteContent }) => {
  return (
    <main>
      <Layout content={ConcreteContent} className="main tour page" />
    </main>
  );
};

AbstractPage.propTypes = {
  Theme: PropTypes.string.isRequired,
  Slogan: PropTypes.any.isRequired,
  ConcreteContent: PropTypes.any.isRequired,
  Layout: PropTypes.any.isRequired,
};

const Page = {
  Brand: () => (
    <Container fluid>
      <Menu.Tour />
      <AbstractPage Layout={LayoutRightyVery} Theme={ROLE.BRAND.name} Slogan={TOUR.BRAND.SLOGAN} ConcreteContent={Content.Home} />
      <AbstractPage Layout={LayoutRighty} Theme={ROLE.BRAND.name} Slogan={TOUR.BRAND.SLOGAN} ConcreteContent={Content.Discover} />
      <AbstractPage Layout={LayoutLefty} Theme={ROLE.BRAND.name} Slogan={TOUR.BRAND.SLOGAN} ConcreteContent={Content.Choose} />
      <AbstractPage Layout={LayoutRighty} Theme={ROLE.BRAND.name} Slogan={TOUR.BRAND.SLOGAN} ConcreteContent={Content.Reach} />
      <AbstractPage Layout={LayoutLefty} Theme={ROLE.BRAND.name} Slogan={TOUR.BRAND.SLOGAN} ConcreteContent={Content.Measure} />
      <AbstractPage Layout={LayoutCentered} Theme={ROLE.BRAND.name} Slogan={TOUR.BRAND.SLOGAN} ConcreteContent={Content.Action} />
      <AboutUs />
      <Dimmer />
    </Container>
  ),
};

export default Page;
