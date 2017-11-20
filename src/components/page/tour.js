import React from 'react';
import PropTypes from 'prop-types';
import ran from 'randf';
// import { Scroll } from 'react-skroll';
import { Container, Grid, Header, Image, Responsive, Visibility } from 'semantic-ui-react';

import Menu from '../../store/containers/menu';
import AboutUs from '../../store/containers/aboutus';
import Dimmer from '../../store/containers/dimmer';

import Marketeer from './tour/marketeer';
import Athlete from './tour/athlete';

import FlexContainer from '../common/container';
import LayoutGoldenRatio from '../layout/goldenratio';
import LayoutRighty from '../layout/righty';
import LayoutRightyVery from '../layout/rightyvery';
import LayoutLefty from '../layout/lefty';
import LayoutLeftyVery from '../layout/leftyvery';
import LayoutCentered from '../layout/centered';
import LayoutCenteredWide from '../layout/centeredwide';

import { ROLE, TOUR, DATA, IMG } from '../../assets/data/enum';

const AbstractPage = ({ ConcretePage, Layout, style }) => {
  let c = 0;
  const generator = [];
  while (c++ < (7 * 23)) { generator.push(c); }

  return (
    <Layout content={ConcretePage} className="main tour page" style={style}/>
  )
};

AbstractPage.propTypes = {
  ConcretePage: PropTypes.any.isRequired,
  Layout: PropTypes.any.isRequired,
  style: PropTypes.object,
};

const Page = {
  Marketeer: class MarketeerRoute extends React.Component {
    state = {
        minHeight: 'inherit',
        height: null,
    };
    resize = () => {
     this.forceUpdate();
    }
    componentWillMount () {
      this.setState({ minHeight: Number(window.innerHeight).toString() + 'px' });
    }
    componentDidMount () {
      window.addEventListener('resize', this.resize);
    }
    childrenDidLoad () {
      /*const h = Array.prototype.map
        .call(document.querySelectorAll(".main.tour.page"), el => el.clientHeight)
        .reduce((acc, cur) => acc + cur, 0);
      this.setState({ height: h });*/
    }
    componentWillUnmount() {
      window.removeEventListener('resize', this.resize);
    }
    render () {
      const { minHeight } = this.state;

      return (
        <main>
          <img src="/assets/img/tour/marketeer/plx_bg_1.png"
            width="100%"
            height="auto"
            style={{
              position: 'fixed',
              marginTop: 'auto',
              marginBottom: 'auto',
              top: '0',
              bottom: '0',
              opacity: 0.3,
              filter: 'blur(3px)',
            }}
          />
          <FlexContainer pxHeight={this.state.height} className="main tour marketeer container" style={{ minHeight: minHeight }} onLoad={this.childrenDidLoad.bind(this)}>
            <AbstractPage Layout={LayoutRightyVery} ConcretePage={Marketeer.Home} />
            <AbstractPage Layout={LayoutRighty} ConcretePage={Marketeer.Discover} />
            <AbstractPage Layout={LayoutLefty} ConcretePage={Marketeer.Choose} />
            <AbstractPage Layout={LayoutRighty} ConcretePage={Marketeer.Reach} />
            <AbstractPage Layout={LayoutLefty} ConcretePage={Marketeer.Measure} />
            <AbstractPage Layout={LayoutCentered} ConcretePage={Marketeer.Action} />
            <Dimmer />
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
        </main>
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
    childrenDidLoad () {
    }
    render () {
      const { minHeight } = this.state;
      return (
        <FlexContainer className="main tour athlete page" style={{ minHeight: minHeight }} onLoad={() => this.childrenDidLoad()}>
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
            <Menu.Mobile.Menu />
            <Menu.Mobile.Sidebar />
            <AboutUs.Mobile.Menu />
            <AboutUs.Mobile.Sidebar />
          </Responsive>
          <Dimmer />
        </FlexContainer>
      );
    }
  },
};

export default Page;
