import React from 'react';
import PropTypes from 'prop-types';
import Scroll from 'react-scroll';
import { Container, Grid, Header, Image, Visibility } from 'semantic-ui-react';

import Dimmer from '../../store/containers/dimmer';
import Menu from '../common/menu';
import AboutUs from '../common/aboutus';

import Marketeer from './tour/marketeer';
import Athlete from './tour/athlete';

import FlexContainer from '../layout/container';
import LayoutGoldenRatio from '../layout/goldenratio';
import LayoutRighty from '../layout/righty';
import LayoutRightyVery from '../layout/rightyvery';
import LayoutLefty from '../layout/lefty';
import LayoutLeftyVery from '../layout/leftyvery';
import LayoutCentered from '../layout/centered';
import LayoutCenteredWide from '../layout/centeredwide';

import { ROLE, TOUR, DATA, IMG } from '../../assets/data/enum';

const AbstractPage = ({ ConcretePage, Layout }) => (
  <Layout content={ConcretePage} className="main tour page" />
);

AbstractPage.propTypes = {
  ConcretePage: PropTypes.any.isRequired,
  Layout: PropTypes.any.isRequired,
};

const Page = {
  Marketeer: () => (
    <FlexContainer className="main tour marketeer">
      <AbstractPage Layout={LayoutRightyVery} ConcretePage={Marketeer.Home} />
      <AbstractPage Layout={LayoutRighty} ConcretePage={Marketeer.Discover} />
      <AbstractPage Layout={LayoutLefty} ConcretePage={Marketeer.Choose} />
      <AbstractPage Layout={LayoutRighty} ConcretePage={Marketeer.Reach} />
      <AbstractPage Layout={LayoutLefty} ConcretePage={Marketeer.Measure} />
      <AbstractPage Layout={LayoutCentered} ConcretePage={Marketeer.Action} />
      <Menu.Primary />
      <AboutUs />
      <Dimmer />
    </FlexContainer>
  ),
  Athlete: () => (
    <FlexContainer className="main tour athlete page">
      <AbstractPage Layout={LayoutRightyVery} Theme={ROLE.ATHLETE.name} Slogan={TOUR.ATHLETE.SLOGAN} ConcretePage={Athlete.Home} />
      <AbstractPage Layout={LayoutRightyVery} Theme={ROLE.ATHLETE.name} Slogan={TOUR.ATHLETE.SLOGAN} ConcretePage={Athlete.Profile} />
      <AbstractPage Layout={LayoutLeftyVery} Theme={ROLE.ATHLETE.name} Slogan={TOUR.ATHLETE.SLOGAN} ConcretePage={Athlete.BeDiscovered} />
      <AbstractPage Layout={LayoutRighty} Theme={ROLE.ATHLETE.name} Slogan={TOUR.ATHLETE.SLOGAN} ConcretePage={Athlete.Monetise} />
      <AbstractPage Layout={LayoutLeftyVery} Theme={ROLE.ATHLETE.name} Slogan={TOUR.ATHLETE.SLOGAN} ConcretePage={Athlete.Focus} />
      <AbstractPage Layout={LayoutCentered} Theme={ROLE.ATHLETE.name} Slogan={TOUR.ATHLETE.SLOGAN} ConcretePage={Athlete.Action} />
      <Menu.Primary />
      <AboutUs />
      <Dimmer />
    </FlexContainer>
  ),
};

export default Page;
