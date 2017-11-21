import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Form, Header, Input, Dropdown, Menu, Segment, Tab } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { ACTION, TEXT, ROLE, DATA } from '../../../assets/data/enum';

const FormFields = {
  TextInput: () => (
    <Input/>
  ),
  PhoneInput: () => (
    <Input>
      <Form.Field width={8}>
        <Dropdown placeholder="Country code" selection options={DATA.PHONE_EXTENSIONS} style={{ marginTop: '-2px'}} />
      </Form.Field>
      <Form.Field width={8}>
        <Input/>
      </Form.Field>
    </Input>
  ),
  MultiSportsInput: () => (
    <Dropdown placeholder="Type ahead ..." fluid multiple search selection options={DATA.SPORTS} />
  ),
};

const Content = {
  BRAND: () => (
    <Form>
      <Form.Field required label="First name" control={FormFields.TextInput} placeholder="First name" />
      <Form.Field required label="Last name" control={FormFields.TextInput} placeholder="Last name" />
      <Form.Field required label="Brand" control={FormFields.TextInput} placeholder="Sportilicious" />
      <Form.Field required label="Telephone" control={FormFields.PhoneInput} placeholder="(0) 123 456 789" />
      <Form.Field required label="Business Email" control={FormFields.TextInput} icon="at" placeholder="email@address.com" />
    </Form>
  ),
  TEAM: () => (
    <Form>
      <Form.Field required label="Team name" control={FormFields.TextInput} placeholder="Team Awesome" />
      <Form.Field required label="First name" control={FormFields.TextInput} placeholder="First name" />
      <Form.Field required label="Last name" control={FormFields.TextInput} placeholder="Last name" />
      <Form.Field required label="Your role" control={FormFields.TextInput} placeholder="Captain" />
      <Form.Field required label="Sport" control={FormFields.MultiSportsInput} placeholder="Select your sports ..." />
      <Form.Field required label="Telephone" control={FormFields.PhoneInput} placeholder="(0) 123 456 789" />
      <Form.Field required label="Email" control={FormFields.TextInput} icon="at" placeholder="email@address.com" />
    </Form>
  ),
  ATHLETE: () => (
    <Form>
      <Form.Field required label="First name" control={FormFields.TextInput} placeholder="First name" />
      <Form.Field required label="Last name" control={FormFields.TextInput} placeholder="Last name" />
      <Form.Field required label="Sport" control={FormFields.MultiSportsInput} placeholder="Select your sports ..." />
      <Form.Field required label="Telephone" control={FormFields.PhoneInput} placeholder="(0) 123 456 789" />
      <Form.Field required label="Email" control={FormFields.TextInput} icon="at" placeholder="email@address.com" />
    </Form>
  ),
  'MARKETING AGENT': () => (
    <Form>
      <Form.Field required label="First name" control={FormFields.TextInput} placeholder="First name" />
      <Form.Field required label="Last name" control={FormFields.TextInput} placeholder="Last name" />
      <Form.Field required label="Company/Agency" control={FormFields.TextInput} placeholder="Sportilicious" />
      <Form.Field required label="Telephone" control={FormFields.PhoneInput} placeholder="(0) 123 456 789" />
      <Form.Field required label="Business Email" control={FormFields.TextInput} icon="at" placeholder="email@address.com" />
    </Form>
  ),
  'SPORT AGENT': () => (
    <Form>
      <Form.Field required label="First name" control={FormFields.TextInput} placeholder="First name" />
      <Form.Field required label="Last name" control={FormFields.TextInput} placeholder="Last name" />
      <Form.Field required label="Telephone" control={FormFields.PhoneInput} placeholder="(0) 123 456 789" />
      <Form.Field required label="Email" control={FormFields.TextInput} icon="at" placeholder="email@address.com" />
    </Form>
  ),
};

const Tabs = ({ active, onChangeRole }) => {
  const Roles = Object.getOwnPropertyNames(ROLE);
  const Panes = Roles.map((role) => {
    const TabContent = Content[role];
    return {
      menuItem: ROLE[role].title,
      render: () => (<Tab.Pane attached={false} active={active === role}><TabContent /></Tab.Pane>),
    };
  });
  return (<Tab renderActiveOnly activeIndex={Roles.indexOf(active)} menu={{ pointing: true }} panes={Panes} onTabChange={(ev, d) => onChangeRole(ROLE[Roles[d.activeIndex]].name)} />);
};

Tabs.propTypes = {
  active: PropTypes.string.isRequired,
  onChangeRole: PropTypes.func.isRequired,
};

const Footer = ({ onSwitch, onDeactivate, onActivate }) => (
  <Segment attached="bottom">
    <Segment.Group>
      <Segment inverted attached>
        <Header as="h2" sub textAlign="center">
          {TEXT.SIGN_UP.CONSENT.PREFIX}
          <a onClick={() => onSwitch(ACTION.DIMMER.TERMS_OF_USE)} style={{ cursor: 'pointer' }}>
            {TEXT.SIGN_UP.CONSENT.LINK}
          </a>
          {TEXT.SIGN_UP.CONSENT.SUFFIX}
        </Header>
      </Segment>
      <Segment attached textAlign="center">
        <Button.Group>
          <Button negative onClick={onDeactivate}>{TEXT.SIGN_UP.BUTTON.CANCEL}</Button>
          <Button.Or />
          <Button positive onClick={() => onActivate()}>{TEXT.SIGN_UP.BUTTON.OK}</Button>
        </Button.Group>
      </Segment>
      <Segment inverted attached="bottom">
        <Header as="h2" sub textAlign="center">
          {TEXT.SIGN_UP.LOG_IN.PREFIX}
          <a onClick={() => onSwitch(ACTION.DIMMER.LOG_IN)} style={{ cursor: 'pointer' }}>
            {TEXT.SIGN_UP.LOG_IN.LINK}
          </a>
          {TEXT.SIGN_UP.LOG_IN.SUFFIX}
        </Header>
      </Segment>
    </Segment.Group>
  </Segment>
);

Footer.propTypes = {
  onSwitch: PropTypes.func.isRequired,
  onActivate: PropTypes.func.isRequired,
  onDeactivate: PropTypes.func.isRequired,
};

const Page = ({ active, onSwitch, onActivate, onDeactivate, onChangeRole }) => {
  if (active === 'about') {
    onChangeRole(ROLE.BRAND.name);
  }
  return (
    <Segment.Group>
      <Segment inverted attached="top" textAlign="center">
        <Header as="h1" sub>{TEXT.SIGN_UP.TITLE}</Header>
      </Segment>
      <Segment attached>
        <Tabs active={active} onChangeRole={onChangeRole} />
      </Segment>
      <Footer onSwitch={onSwitch} onDeactivate={onDeactivate} onActivate={onActivate} />
    </Segment.Group>
  );
};

Page.propTypes = {
  active: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
  onActivate: PropTypes.func.isRequired,
  onDeactivate: PropTypes.func.isRequired,
};

export default Page;
