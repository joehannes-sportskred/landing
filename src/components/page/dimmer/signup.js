import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Form, Header, Icon, Input, Dropdown, Menu, Segment, Tab, Responsive } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { ACTION, TEXT, ROLE, DATA } from '../../../assets/data/enum';

const Validator = ({ validator, onUpdate }, { store, updates } ) => {
  validator(store);
  onUpdate(updates);
}

const curry = (fn, formName) => (store) => {
  const s = Object.keys(store).filter(key => !!store.match(formName));
  const truthy = s.length > 0 ? s.reduce((acc, c) => !!(acc && store[c].length), true) : false;
  fn(truthy);
};

const FormFields = {
  TextInput: ({ placeholder, formName, name, value, onUpdate }) => (
    <Input
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={ (e, { name, value }) => {
        Validator({ validator: onUpdate.validated, onUpdate: onUpdate.onUpdate }, { store: onUpdate.store, updates: { [`${formName}[${name}]`]: value }})
      }}
    />
  ),
  PhoneInput: ({ placeholder, formName, name, value, onUpdate }) => (
    <Input>
      <Form.Field width={8}>
        <Dropdown
          placeholder="Country code" name={name[0]} value={value.phoneCode} selection options={DATA.PHONE_EXTENSIONS} style={{ marginTop: '-2px'}}
          onChange={ (e, { name, value }) => {
            Validator({ validator: onUpdate.validated, onUpdate: onUpdate.onUpdate }, { store: onUpdate.store, updates: { [`${formName}[phoneCode]`]: value }})
          }}
        />
      </Form.Field>
      <Form.Field width={8}>
        <Input
          placeholder={placeholder} name={name[1]} value={value.phone}
          onChange={ (e, { name, value }) => {
            Validator({ validator: onUpdate.validated, onUpdate: onUpdate.onUpdate }, { store: onUpdate.store, updates: { [`${formName}[phone]`]: value }})
          }}
        />
      </Form.Field>
    </Input>
  ),
  MultiSportsInput: ({ placeholder, formName, name, value, onUpdate }) => (
    <Dropdown
      placeholder={ placeholder || 'Type ahead ...'} value={value}
      fluid multiple search selection options={DATA.SPORTS}
      onChange={ (e, { name, value }) => {
        Validator({ validator: onUpdate.validated, onUpdate: onUpdate.onUpdate }, { store: onUpdate.store, updates: { [`${formName}[sports][]`]: value }})
      }}
    />
  ),
};

const Content = {
  BRAND: ({ validated, store, onUpdate, formName = 'registration_company_brand_form' }) => (
    <Form>
      <Form.Field
        required label="First name" control={FormFields.TextInput} placeholder="First name"
        onUpdate={{ validated: curry(validated, formName), onUpdate, store }}
        formName={formName} name="firstName" value={store[`${formName}[firstName]`]} />
      <Form.Field
        required label="Last name" control={FormFields.TextInput} placeholder="Last name"
        onUpdate={{ validated: curry(validated, formName), onUpdate, store }}
        formName={formName} name="lastName" value={store[`${formName}[lastName]`]} />
      <Form.Field
        required label="Brand" control={FormFields.TextInput} placeholder="Sportilicious"
        onUpdate={{ validated: curry(validated, formName), onUpdate, store }}
        formName={formName} name="brand" value={store[`${formName}[brand]`]} />
      <Form.Field
        required label="Telephone" control={FormFields.PhoneInput} placeholder="(0) 123 456 789"
        onUpdate={{ validated: curry(validated, formName), onUpdate, store }}
        formName={formName} name={['phone', 'phoneCode']} value={{ phone: store[`${formName}[phone]`], phoneCode: store[`${formName}[phoneCode]`] }} />
      <Form.Field
        required label="Business Email" control={FormFields.TextInput} icon="at" placeholder="email@address.com"
        onUpdate={{ validated: curry(validated, formName), onUpdate, store }}
        formName={formName} name="email" value={store[`${formName}[email]`]}/>
    </Form>
  ),
  TEAM: ({ validated, store, onUpdate, formName = 'registration_team_form'}) => (
    <Form>
      <Form.Field
        required label="Team name" control={FormFields.TextInput} placeholder="Team Awesome"
        onUpdate={{ validated: curry(validated, formName), onUpdate, store }}
        formName={formName} name="team" value={store[`${formName}[team]`]}
      />
      <Form.Field
        required label="First name" control={FormFields.TextInput} placeholder="First name"
        onUpdate={{ validated: curry(validated, formName), onUpdate, store }}
        formName={formName} name="firstName" value={store[`${formName}[firstName]`]}
      />
      <Form.Field
        required label="Last name" control={FormFields.TextInput} placeholder="Last name"
        onUpdate={{ validated: curry(validated, formName), onUpdate, store }}
        formName={formName} name="lastName" value={store[`${formName}[lastName]`]}
      />
      <Form.Field
        required label="Your role" control={FormFields.TextInput} placeholder="Captain"
        onUpdate={{ validated: curry(validated, formName), onUpdate, store }}
        formName={formName} name="roleInTeam" value={store[`${formName}[roleInTeam]`]}
      />
      <Form.Field
        required label="Sport" control={FormFields.MultiSportsInput} placeholder="Select your sports ..."
        onUpdate={{ validated: curry(validated, formName), onUpdate, store }}
        formName={formName} name="sports" value={store[`${formName}[sports][]`]}
      />
      <Form.Field
        required label="Telephone" control={FormFields.PhoneInput} placeholder="(0) 123 456 789"
        onUpdate={{ validated: curry(validated, formName), onUpdate, store }}
        formName={formName} name={['phone', 'phoneCode']} value={{ phone: store[`${formName}[phone]`], phoneCode: store[`${formName}[phoneCode]`] }}

      />
      <Form.Field
        required label="Email" control={FormFields.TextInput} icon="at" placeholder="email@address.com"
        onUpdate={{ validated: curry(validated, formName), onUpdate, store }}
        formName={formName} name="email" value={ store[`${formName}[email]`] }
      />
    </Form>
  ),
  ATHLETE: ({ validated, store, onUpdate, formName = 'registration_athlete_form'}) => (
    <Form>
      <Form.Field
        required label="First name" control={FormFields.TextInput} placeholder="First name"
        onUpdate={{ validated: curry(validated, formName), onUpdate, store }}
        formName={formName} name="firstName" value={ store[`${formName}[firstName]`] }
      />
      <Form.Field
        required label="Last name" control={FormFields.TextInput} placeholder="Last name"
        onUpdate={{ validated: curry(validated, formName), onUpdate, store }}
        formName={formName} name="lastName" value={ store[`${formName}[lastName]`] }
      />
      <Form.Field
        required label="Sport" control={FormFields.MultiSportsInput} placeholder="Select your sports ..."
        onUpdate={{ validated: curry(validated, formName), onUpdate, store }}
        formName={formName} name="sports" value={ store[`${formName}[sports][]`] }
      />
      <Form.Field
        required label="Telephone" control={FormFields.PhoneInput} placeholder="(0) 123 456 789"
        onUpdate={{ validated: curry(validated, formName), onUpdate, store }}
        formName={formName} name={['phone', 'phoneCode']} value={{ phone: store[`${formName}[phone]`], phoneCode: store[`${formName}[phoneCode]`] }}
      />
      <Form.Field
        required label="Email" control={FormFields.TextInput} icon="at" placeholder="email@address.com"
        onUpdate={{ validated: curry(validated, formName), onUpdate, store }}
        formName={formName} name="email" value={ store[`${formName}[email]`] }
      />
    </Form>
  ),
  'MARKETING AGENT': ({ validated, store, onUpdate, formName = 'registration_media_agent_form' }) => (
    <Form>
      <Form.Field
        required label="First name" control={FormFields.TextInput} placeholder="First name"
        onUpdate={{ validated: curry(validated, formName), onUpdate, store }}
        formName={formName} name="firstName" value={ store[`${formName}[firstName]`] }
      />
      <Form.Field
        required label="Last name" control={FormFields.TextInput} placeholder="Last name"
        onUpdate={{ validated: curry(validated, formName), onUpdate, store }}
        formName={formName} name="lastName" value={ store[`${formName}[lastName]`] }
      />
      <Form.Field
        required label="Company/Agency" control={FormFields.TextInput} placeholder="Sportilicious"
        onUpdate={{ validated: curry(validated, formName), onUpdate, store }}
        formName={formName} name="brand" value={ store[`${formName}[brand]`] }
      />
      <Form.Field
        required label="Telephone" control={FormFields.PhoneInput} placeholder="(0) 123 456 789"
        onUpdate={{ validated: curry(validated, formName), onUpdate, store }}
        formName={formName} name={['phone', 'phoneCode']} value={{ phone: store[`${formName}[phone]`], phoneCode: store[`${formName}[phoneCode]`] }}
      />
      <Form.Field
        required label="Business Email" control={FormFields.TextInput} icon="at" placeholder="email@address.com"
        onUpdate={{ validated: curry(validated, formName), onUpdate, store }}
        formName={formName} name="email" value={ store[`${formName}[email]`] }
      />
    </Form>
  ),
  'SPORT AGENT': ({ validated, store, onUpdate, formName = 'registration_sport_agent_form'}) => (
    <Form>
      <Form.Field
        required label="First name" control={FormFields.TextInput} placeholder="First name"
        onUpdate={{ validated: curry(validated, formName), onUpdate, store }}
        formName={formName} name="firstName" value={ store[`${formName}[firstName]`] }
      />
      <Form.Field
        required label="Last name" control={FormFields.TextInput} placeholder="Last name"
        onUpdate={{ validated: curry(validated, formName), onUpdate, store }}
        formName={formName} name="lastName" value={ store[`${formName}[lastName]`] }
      />
      <Form.Field
        required label="Telephone" control={FormFields.PhoneInput} placeholder="(0) 123 456 789"
        onUpdate={{ validated: curry(validated, formName), onUpdate, store }}
        formName={formName} name={['phone', 'phoneCode']} value={{ phone: store[`${formName}[phone]`], phoneCode: store[`${formName}[phoneCode]`] }}
      />
      <Form.Field
        required label="Email" control={FormFields.TextInput} icon="at" placeholder="email@address.com"
        onUpdate={{ validated: curry(validated, formName), onUpdate, store }}
        formName={formName} name="email" value={ store[`${formName}[email]`] }
      />
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
  const store = apiData[ACTION.API.SIGN_UP] || {};
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
