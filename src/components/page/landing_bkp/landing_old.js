import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';

import Dimmer from '../../store/containers/dimmer';

import Menu from '../common/menu';
import AboutUs from '../common/aboutus';

import LayoutGoldenRatio from '../layout/goldenratio';
import LayoutRighty from '../layout/righty';
import LayoutLefty from '../layout/lefty';
import LayoutCentered from '../layout/centered';

import Content from './landing/primary';
import TeamContent from './landing/secondary';
import WhyContent from './landing/tertiary';
import HowContent from './landing/quaternary';

import { IMG } from '../../assets/data/enum';

class Page extends Component {
  render = () => (
    <main>
      <Menu.Primary />
      <Image wrapped centered fluid spaced src={IMG.LOGO} className="landing page hero image" />
      <LayoutGoldenRatio
        content={Content}
        className="primary landing page"
      />
      <LayoutRighty
        content={TeamContent}
        className="secondary landing page"
      />
      <LayoutLefty
        content={WhyContent}
        className="tertiary landing page"
      />
      <LayoutCentered
        content={HowContent}
        className="quaternary landing page"
      />
      <AboutUs />
      <Dimmer />
    </main>
  );
}

export default Page;
