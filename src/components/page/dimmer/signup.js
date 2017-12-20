import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Form, Header, Icon, Input, Dropdown, Menu, Segment, Tab, Responsive } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { ACTION, TEXT, ROLE, DATA } from '../../../assets/data/enum';

const FormFields = {
  TextInput: ({ placeholder, formName, name, value, onUpdate }) => (
    <Input placeholder={placeholder} name={name} value={value} onChange={ (e, { name, value }) => onUpdate({ [formName + '[' + name + ']']: value })}/>
  ),
  PhoneInput: ({ placeholder, formName, name, value, onUpdate }) => (
    <Input>
      <Form.Field width={8}>
        <Dropdown placeholder="Country code" selection options={DATA.PHONE_EXTENSIONS} style={{ marginTop: '-2px'}} />
      </Form.Field>
      <Form.Field width={8}>
        <Input placeholder={placeholder} name={name[1]} value={value.phone} onChange={ (e, { name, value }) => onUpdate({ [formName + '[' + name + ']']: value })} />
      </Form.Field>
    </Input>
  ),
  MultiSportsInput: () => (
    <Dropdown placeholder="Type ahead ..." fluid multiple search selection options={DATA.SPORTS} />
  ),
};

const Content = {
  BRAND: ({ validated, store, onUpdate}) => (
    <Form>
      <Form.Field required label="First name" control={FormFields.TextInput} onUpdate={onUpdate} formName="registration_company_brand_form" name="firstName" value={store.firstName} placeholder="First name" />
      <Form.Field required label="Last name" control={FormFields.TextInput} placeholder="Last name" onUpdate={onUpdate} formName="registration_company_brand_form" name="lastName" value={store.lastName} />
      <Form.Field required label="Brand" control={FormFields.TextInput} placeholder="Sportilicious" onUpdate={onUpdate} formName="registration_company_brand_form" name="brand" value={store.brand} />
      <Form.Field required label="Telephone" control={FormFields.PhoneInput} placeholder="(0) 123 456 789" onUpdate={onUpdate} formName="registration_company_brand_form" name={['phone', 'phoneCode']} value={{ phone: store.phone, phoneCode: store.phoneCode }} />
      <Form.Field required label="Business Email" control={FormFields.TextInput} icon="at" placeholder="email@address.com" onUpdate={onUpdate} formName="registration_company_brand_form" name="email" value={store.email}/>
    </Form>
  ),
  TEAM: ({ validated, store, onUpdate}) => (
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
  ATHLETE: ({ validated, store, onUpdate}) => (
    <Form>
      <Form.Field required label="First name" control={FormFields.TextInput} placeholder="First name" />
      <Form.Field required label="Last name" control={FormFields.TextInput} placeholder="Last name" />
      <Form.Field required label="Sport" control={FormFields.MultiSportsInput} placeholder="Select your sports ..." />
      <Form.Field required label="Telephone" control={FormFields.PhoneInput} placeholder="(0) 123 456 789" />
      <Form.Field required label="Email" control={FormFields.TextInput} icon="at" placeholder="email@address.com" />
    </Form>
  ),
  'MARKETING AGENT': ({ validated, store, onUpdate}) => (
    <Form>
      <Form.Field required label="First name" control={FormFields.TextInput} placeholder="First name" />
      <Form.Field required label="Last name" control={FormFields.TextInput} placeholder="Last name" />
      <Form.Field required label="Company/Agency" control={FormFields.TextInput} placeholder="Sportilicious" />
      <Form.Field required label="Telephone" control={FormFields.PhoneInput} placeholder="(0) 123 456 789" />
      <Form.Field required label="Business Email" control={FormFields.TextInput} icon="at" placeholder="email@address.com" />
    </Form>
  ),
  'SPORT AGENT': ({ validated, store, onUpdate}) => (
    <Form>
      <Form.Field required label="First name" control={FormFields.TextInput} placeholder="First name" />
      <Form.Field required label="Last name" control={FormFields.TextInput} placeholder="Last name" />
      <Form.Field required label="Telephone" control={FormFields.PhoneInput} placeholder="(0) 123 456 789" />
      <Form.Field required label="Email" control={FormFields.TextInput} icon="at" placeholder="email@address.com" />
    </Form>
  ),
};

class Tabs extends React.Component {
  Roles = Object.getOwnPropertyNames(ROLE);
  Panes = this.Roles.map((role, key) => {
    const TabContent = Content[role];
    return {
      menuItem: (window.matchMedia("(max-width: 767px)").matches) ?
        <Menu.Item key={key} icon={ROLE[role].icon} /> :
        ROLE[role].title,
      render: () =>
        <Tab.Pane attached={false} active={this.props.active === role ? true : undefined}>
          <TabContent validated={this.props.validated} store={this.props.store} onUpdate={this.props.onUpdate} />
        </Tab.Pane>
      ,
    };
  });

  render () {
    const { active, onChangeRole } = this.props;
    return <div>
      <div style={{ color: 'black', lineHeight: '1.8rem' }} className="shiny black text">
        {(window.matchMedia("(max-width: 767px)").matches) ? "as ... " + this.props.active : null }
      </div>
      <Tab
        renderActiveOnly
        activeIndex={this.Roles.indexOf(active)}
        menu={{ pointing: true }}
        panes={this.Panes}
        onTabChange={(ev, d) => onChangeRole(ROLE[this.Roles[d.activeIndex]].name)}
      />
    </div>
    ;
  }
};

Tabs.propTypes = {
  active: PropTypes.string.isRequired,
  onChangeRole: PropTypes.func.isRequired,
  store: PropTypes.any.isRequired,
  validated: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

const Footer = ({ onSwitch, onDeactivate, onActivate, validated }) => (
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
          <Button positive onClick={() => onActivate()} disabled={!validated}>{TEXT.SIGN_UP.BUTTON.OK}</Button>
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
  validated: PropTypes.bool.isRequired,
};

const Page = ({ active, apiData, onSwitch, onActivate, onDeactivate, onChangeRole, onPayloadUpdate }) => {
  if (active === 'about') {
    onChangeRole(ROLE.BRAND.name);
  }
  let validationTruthy = false;
  const store = apiData.API_SIGN_UP;
  const validated = (truthy) => { validationTruthy = truthy; }
  return (
    <Segment.Group>
      <Segment inverted attached="top" textAlign="center">
        <Header as="h1" sub>{TEXT.SIGN_UP.TITLE}</Header>
      </Segment>
      <Segment attached>
        <Tabs active={active} onChangeRole={onChangeRole} store={store} validated={validated} onUpdate={onPayloadUpdate} />
      </Segment>
      <Footer onSwitch={onSwitch} onDeactivate={onDeactivate} onActivate={onActivate} validated={validationTruthy}/>
    </Segment.Group>
  );
};

Page.propTypes = {
  active: PropTypes.string.isRequired,
  apiData: PropTypes.any.isRequired,
  onSwitch: PropTypes.func.isRequired,
  onActivate: PropTypes.func.isRequired,
  onDeactivate: PropTypes.func.isRequired,
  onChangeRole: PropTypes.func.isRequired,
  onPayloadUpdate: PropTypes.func.isRequired,
};

export default Page;
