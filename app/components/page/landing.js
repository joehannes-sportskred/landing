import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import Dimmer from '../../store/containers/dimmer';

import Menu from '../common/menu';
import AboutUs from '../common/aboutus';

import LayoutGoldenRatio from '../layout/goldenratio';
import LayoutRighty from '../layout/righty';
import LayoutLefty from '../layout/lefty';
import LayoutCentered from '../layout/centered';
import LayoutCenteredWide from '../layout/centeredwide';
import LayoutBalanced from '../layout/balanced';

// import Content from './landing/primary';
// import TeamContent from './landing/secondary';
// import WhyContent from './landing/tertiary';
// import HowContent from './landing/quaternary';

import Intro from './landing/slogan';
import PhotoScreens from './landing/photoscreens';

import { IMG } from '../../assets/data/enum';

class Page extends Component {
  state = {
    intro: true,
  };
  render = () => (
    <main>
      <Menu.Primary />
      {this.state.intro ?
        <LayoutCenteredWide
          content={Intro}
          className="main landing page intro"
          callback={() => this.setState({ intro: false })}
        /> :
        <LayoutBalanced
          content={PhotoScreens}
          className="main landing page rolechooser"
          style={{ display: 'none' }}
        />
      }
      <AboutUs />
      <Dimmer />
    </main>
  );
}

export default Page;
