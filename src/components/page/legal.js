import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Segment, Header } from 'semantic-ui-react';

import Dimmer from '../../store/containers/dimmer';

import Menu from '../common/menu';
import Layout from '../layout/centeredwide';
import AboutUs from '../common/aboutus';

import PrivacyPolicyDetails from './legal/privacypolicy';
import TermsOfUseDetails from './legal/termsofuse';

import { TEXT, IMG } from '../../assets/data/enum';

const AbstractPage = ({ Title, Content }) => (
  <Segment.Group as="article">
    <Segment as="header" inverted padded raised attached="top">
      <Header as="h1">{Title}</Header>
    </Segment>
    <Content />
  </Segment.Group>
);

AbstractPage.propTypes = {
  Title: PropTypes.string.isRequired,
  Content: PropTypes.any.isRequired,
};

const Details = {
  PrivacyPolicy: () => <AbstractPage Title={TEXT.PP.TITLE} Content={PrivacyPolicyDetails} />,
  TermsOfUse: () => <AbstractPage Title={TEXT.TOU.TITLE} Content={TermsOfUseDetails} />,
};

const AbstractLayout = ({ concretePage }) => (
  <main>
    <Menu.Primary />
    <Segment basic fluid inverted className="children-centered">
      <Image centered fluid spaced src={IMG.LOGO} size="large" className="landing page hero image" />
    </Segment>
    <Layout content={concretePage} className="landing page" />
    <AboutUs />
    <Dimmer />
  </main>
);

AbstractLayout.propTypes = {
  concretePage: PropTypes.any.isRequired,
};

const PrivacyPolicy = () => <AbstractLayout concretePage={Details.PrivacyPolicy} />
const TermsOfUse = () => <AbstractLayout concretePage={Details.TermsOfUse} />

const Page = {
  PrivacyPolicy,
  TermsOfUse,
};

export default Page;
