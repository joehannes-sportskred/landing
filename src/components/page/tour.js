import React from 'react';
import PropTypes from 'prop-types';
import Scroll from 'scrollmagic';
import { Container, Grid, Header, Image, Responsive } from 'semantic-ui-react';

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

const AbstractPage = ({ ConcretePage, Layout, style }) => (
  <Layout content={ConcretePage} className="main tour page" style={style}/>
);

AbstractPage.propTypes = {
  ConcretePage: PropTypes.any.isRequired,
  Layout: PropTypes.any.isRequired,
  style: PropTypes.object,
};

const Page = {
  Marketeer: class MarketeerRoute extends React.Component {
    state = {
        minHeight: 'inherit',
    }
    resize = () => this.forceUpdate()

    componentWillMount () {
      this.setState({ minHeight: Number(window.innerHeight).toString() + 'px' });
    }
    componentDidMount () {
      window.addEventListener('resize', this.resize);

      const ScrollController = new Scroll.Controller({
  			globalSceneOptions: {
  				triggerHook: 'onLeave'
  			}
  		});

  		var slides = document.querySelectorAll(".flex-container > div");

  		// create scene for every slide
  		for (var i=0; i < slides.length; i++) {
  			new Scroll.Scene({ triggerElement: slides[i] })
  				.setPin(slides[i])
  				// .addIndicators() // add indicators (requires plugin)
  				.addTo(ScrollController);
  		}
    }
    componentWillUnmount() {
      window.removeEventListener('resize', this.resize);
    }
    render () {
      const { minHeight } = this.state;
      return (
        <FlexContainer className="main tour marketeer" style={{ minHeight: minHeight }}>
          <AbstractPage Layout={LayoutRightyVery} ConcretePage={Marketeer.Home} />
          <AbstractPage Layout={LayoutRighty} ConcretePage={Marketeer.Discover} />
          <AbstractPage Layout={LayoutLefty} ConcretePage={Marketeer.Choose} />
          <AbstractPage Layout={LayoutRighty} ConcretePage={Marketeer.Reach} />
          <AbstractPage Layout={LayoutLefty} ConcretePage={Marketeer.Measure} />
          <AbstractPage Layout={LayoutCentered} ConcretePage={Marketeer.Action} />
          <Responsive minWidth={768}>
            <Menu.Primary />
            <AboutUs.Primary />
          </Responsive>
          <Responsive maxWidth={767}>
            <Menu.Mobile />
            <AboutUs.Mobile />
          </Responsive>
          <Dimmer />
        </FlexContainer>
      );
    }
  },
  Athlete: class AthleteRoute extends React.Component {
    state = {
        minHeight: 'inherit',
    }
    componentWillMount () {
      this.setState({ minHeight: Number(window.innerHeight).toString() + 'px' });
    }
    componentDidMount () {
      const ScrollController = new Scroll.Controller({
  			globalSceneOptions: {
  				triggerHook: 'onLeave'
  			}
  		});

  		const slides = document.querySelectorAll(".flex-container > div");

  		for (let i = 0; i < slides.length; i++) {
  			new Scroll.Scene({ triggerElement: slides[i] })
  				.setPin(slides[i])
  				.addTo(ScrollController);
  		}
    }
    render () {
      const { minHeight } = this.state;
      return (
        <FlexContainer className="main tour athlete page" style={{ minHeight: minHeight }}>
          <AbstractPage Layout={LayoutRightyVery} Theme={ROLE.ATHLETE.name} Slogan={TOUR.ATHLETE.SLOGAN} ConcretePage={Athlete.Home} />
          <AbstractPage Layout={LayoutRightyVery} Theme={ROLE.ATHLETE.name} Slogan={TOUR.ATHLETE.SLOGAN} ConcretePage={Athlete.Profile} />
          <AbstractPage Layout={LayoutLeftyVery} Theme={ROLE.ATHLETE.name} Slogan={TOUR.ATHLETE.SLOGAN} ConcretePage={Athlete.BeDiscovered} />
          <AbstractPage Layout={LayoutRighty} Theme={ROLE.ATHLETE.name} Slogan={TOUR.ATHLETE.SLOGAN} ConcretePage={Athlete.Monetise} />
          <AbstractPage Layout={LayoutLeftyVery} Theme={ROLE.ATHLETE.name} Slogan={TOUR.ATHLETE.SLOGAN} ConcretePage={Athlete.Focus} />
          <AbstractPage Layout={LayoutCentered} Theme={ROLE.ATHLETE.name} Slogan={TOUR.ATHLETE.SLOGAN} ConcretePage={Athlete.Action} />
          <Responsive minWidth={768}>
            <Menu.Primary />
            <AboutUs.Primary />
          </Responsive>
          <Responsive maxWidth={767}>
            <Menu.Mobile />
            <AboutUs.Mobile />
          </Responsive>
          <Dimmer />
        </FlexContainer>
      );
    }
  },
};

export default Page;
