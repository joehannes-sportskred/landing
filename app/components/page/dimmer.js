import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Image, Dimmer, Form, Segment, Sidebar, Header } from 'semantic-ui-react';

import Snackbar from '../../store/containers/undoable';

import Layout from '../layout/centered';
import LayoutWide from '../layout/centeredwide';

import SignUp from '../../store/containers/signup';
import LogIn from '../../store/containers/login';
import Forgot from '../../store/containers/reset';

import ToU from './legal/termsofuse';

import { ACTION, TEXT } from '../../assets/data/enum';

const TOU = () => (
  <Segment.Group>
    <Segment inverted attached="top">
      <Header as="h1" sub textAlign="center">
        {TEXT.TOU.TITLE}
      </Header>
    </Segment>
    <ToU />
  </Segment.Group>
);

const Page = ({ dimmer, onDeactivate }) => (<aside>
  <Dimmer
    as="Sidebar.Pushable"
    active={(dimmer === ACTION.DIMMER.SIGN_UP)}
    onClickOutside={onDeactivate}
    page
    style={{ overflowY: 'auto', overflowX: 'hidden' }}
  >
    <Snackbar />
    <Sidebar.Pusher>
      <Layout content={SignUp} />
    </Sidebar.Pusher>
  </Dimmer>
  <Dimmer
    as="Sidebar.Pushable"
    active={(dimmer === ACTION.DIMMER.LOG_IN)}
    onClickOutside={onDeactivate}
    page
  >
    <Snackbar />
    <Sidebar.Pusher>
      <Layout content={LogIn} />
    </Sidebar.Pusher>
  </Dimmer>
  <Dimmer
    as="Sidebar.Pushable"
    active={(dimmer === ACTION.DIMMER.RESET)}
    onClickOutside={onDeactivate}
    page
  >
    <Snackbar />
    <Sidebar.Pusher>
      <Layout content={Forgot} />
    </Sidebar.Pusher>
  </Dimmer>
  <Dimmer
    as="Sidebar.Pushable"
    active={(dimmer === ACTION.DIMMER.TERMS_OF_USE)}
    onClickOutside={onDeactivate}
    page
    style={{ overflowY: 'auto', overflowX: 'hidden' }}
  >
    <Snackbar />
    <Sidebar.Pusher style={{ marginTop: '2rem' }}>
      <LayoutWide content={TOU} className="neutral text-color" />
    </Sidebar.Pusher>
  </Dimmer>
</aside>);

Page.propTypes = {
  dimmer: PropTypes.string.isRequired,
  onDeactivate: PropTypes.func.isRequired,
}

export default Page;
