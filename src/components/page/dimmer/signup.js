import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Form, Header, Icon, Input, Dropdown, Menu, Segment, Tab, Responsive } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { ACTION, TEXT, ROLE, DATA } from '../../../assets/data/enum';

const Validator = ({ validator, onUpdate }, { store, updates } ) => {
  validator(store);
  onUpdate(updates);
}

const curry = (fn, formName, formLen) => (store) => {
  const s = Object.keys(store).filter(key => !!key.match(formName));
  const truthy = s.length == formLen ? s.reduce((acc, c) => !!(acc && store[c].length > 0), true) : false;
  fn(truthy);
};

const FormFields = {
  TextInput: ({ placeholder, formName, name, value, onUpdate }) => (
    <Input
      placeholder={placeholder} name={name} value={value}
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
  MultiSportsInput: ({ placeholder, formName, name, value = [], onUpdate }) => (
    <Dropdown
      placeholder={ placeholder || 'Type ahead ...'} value={DATA.SPORTS.filter(v => value.indexOf(v.text) !== -1).map(v => v.value)}
      fluid multiple search selection options={DATA.SPORTS}
      onChange={ (e, { name, value }) => {
        const jsonValues = value.map(v => DATA.SPORTS[+v.replace('sports','')].text);
        Validator({ validator: onUpdate.validated, onUpdate: onUpdate.onUpdate }, { store: onUpdate.store, updates: { [`${formName}[sports][]`]: jsonValues }})
      }}
    />
  ),
};

class Update extends React.Component {
  on (validated, formName, nrOfFormElements, onUpdate, store) {
    return { validated: curry(validated, formName, nrOfFormElements), onUpdate, store };
  } // 6,8,6,6,5
}

const Content = {
  'COMPANY/BRAND': class Brand extends Update {
    formName = 'registration_company_brand_form';

    on () {
      const { validated, store, onUpdate } = this.props;
      return super.on(validated, this.formName, 6, onUpdate, store);
    }
    render () {
      const { store } = this.props;
      const formName = this.formName;

      return <Form>
        <Form.Field
          required label="First name" control={FormFields.TextInput} placeholder="First name"
          onUpdate={this.on()}
          formName={formName} name="firstName" value={store[`${formName}[firstName]`]} />
        <Form.Field
          required label="Last name" control={FormFields.TextInput} placeholder="Last name"
          onUpdate={this.on()}
          formName={formName} name="lastName" value={store[`${formName}[lastName]`]} />
        <Form.Field
          required label="Brand" control={FormFields.TextInput} placeholder="Sportilicious"
          onUpdate={this.on()}
          formName={formName} name="brand" value={store[`${formName}[brand]`]} />
        <Form.Field
          required label="Telephone" control={FormFields.PhoneInput} placeholder="(0) 123 456 789"
          onUpdate={this.on()}
          formName={formName} name={['phone', 'phoneCode']} value={{ phone: store[`${formName}[phone]`], phoneCode: store[`${formName}[phoneCode]`] }} />
        <Form.Field
          required label="Business Email" control={FormFields.TextInput} icon="at" placeholder="email@address.com"
          onUpdate={this.on()}
          formName={formName} name="email" value={store[`${formName}[email]`]}/>
      </Form>;
    }
  },
  TEAM: class Team extends Update {
    formName = 'registration_team_form';

    on () {
      const { validated, store, onUpdate } = this.props;
      return super.on(validated, this.formName, 8, onUpdate, store);
    }
    render () {
      const { store } = this.props;
      const formName = this.formName;

      return <Form>
        <Form.Field
          required label="Team name" control={FormFields.TextInput} placeholder="Team Awesome"
          onUpdate={this.on()}
          formName={formName} name="team" value={store[`${formName}[team]`]}
        />
        <Form.Field
          required label="First name" control={FormFields.TextInput} placeholder="First name"
          onUpdate={this.on()}
          formName={formName} name="firstName" value={store[`${formName}[firstName]`]}
        />
        <Form.Field
          required label="Last name" control={FormFields.TextInput} placeholder="Last name"
          onUpdate={this.on()}
          formName={formName} name="lastName" value={store[`${formName}[lastName]`]}
        />
        <Form.Field
          required label="Your role" control={FormFields.TextInput} placeholder="Captain"
          onUpdate={this.on()}
          formName={formName} name="roleInTeam" value={store[`${formName}[roleInTeam]`]}
        />
        <Form.Field
          required label="Sport" control={FormFields.MultiSportsInput} placeholder="Select your sports ..."
          onUpdate={this.on()}
          formName={formName} name="sports" value={store[`${formName}[sports][]`]}
        />
        <Form.Field
          required label="Telephone" control={FormFields.PhoneInput} placeholder="(0) 123 456 789"
          onUpdate={this.on()}
          formName={formName} name={['phone', 'phoneCode']} value={{ phone: store[`${formName}[phone]`], phoneCode: store[`${formName}[phoneCode]`] }}

        />
        <Form.Field
          required label="Email" control={FormFields.TextInput} icon="at" placeholder="email@address.com"
          onUpdate={this.on()}
          formName={formName} name="email" value={ store[`${formName}[email]`] }
        />
      </Form>;
    }
  },
  ATHLETE: class Athlete extends Update {
    formName = 'registration_athlete_form';

    on () {
      const { validated, store, onUpdate } = this.props;
      return super.on(validated, this.formName, 6, onUpdate, store);
    }
    render () {
      const { store } = this.props;
      const formName = this.formName;

      return <Form>
        <Form.Field
          required label="First name" control={FormFields.TextInput} placeholder="First name"
          onUpdate={this.on()}
          formName={formName} name="firstName" value={ store[`${formName}[firstName]`] }
        />
        <Form.Field
          required label="Last name" control={FormFields.TextInput} placeholder="Last name"
          onUpdate={this.on()}
          formName={formName} name="lastName" value={ store[`${formName}[lastName]`] }
        />
        <Form.Field
          required label="Sport" control={FormFields.MultiSportsInput} placeholder="Select your sports ..."
          onUpdate={this.on()}
          formName={formName} name="sports" value={ store[`${formName}[sports][]`] }
        />
        <Form.Field
          required label="Telephone" control={FormFields.PhoneInput} placeholder="(0) 123 456 789"
          onUpdate={this.on()}
          formName={formName} name={['phone', 'phoneCode']} value={{ phone: store[`${formName}[phone]`], phoneCode: store[`${formName}[phoneCode]`] }}
        />
        <Form.Field
          required label="Email" control={FormFields.TextInput} icon="at" placeholder="email@address.com"
          onUpdate={this.on()}
          formName={formName} name="email" value={ store[`${formName}[email]`] }
        />
      </Form>;
    }
  },
  'MEDIA AGENT': class MarketingAgent extends Update {
    formName = 'registration_media_agent_form';

    on () {
      const { validated, store, onUpdate } = this.props;
      return super.on(validated, this.formName, 6, onUpdate, store);
    }
    render () {
      const { store } = this.props;
      const formName = this.formName;

      return <Form>
        <Form.Field
          required label="First name" control={FormFields.TextInput} placeholder="First name"
          onUpdate={this.on()}
          formName={formName} name="firstName" value={ store[`${formName}[firstName]`] }
        />
        <Form.Field
          required label="Last name" control={FormFields.TextInput} placeholder="Last name"
          onUpdate={this.on()}
          formName={formName} name="lastName" value={ store[`${formName}[lastName]`] }
        />
        <Form.Field
          required label="Company/Agency" control={FormFields.TextInput} placeholder="Sportilicious"
          onUpdate={this.on()}
          formName={formName} name="brand" value={ store[`${formName}[brand]`] }
        />
        <Form.Field
          required label="Telephone" control={FormFields.PhoneInput} placeholder="(0) 123 456 789"
          onUpdate={this.on()}
          formName={formName} name={['phone', 'phoneCode']} value={{ phone: store[`${formName}[phone]`], phoneCode: store[`${formName}[phoneCode]`] }}
        />
        <Form.Field
          required label="Business Email" control={FormFields.TextInput} icon="at" placeholder="email@address.com"
          onUpdate={this.on()}
          formName={formName} name="email" value={ store[`${formName}[email]`] }
        />
      </Form>;
    }
  },
  'SPORT AGENT': class SportAgent extends Update {
    formName = 'registration_sport_agent_form';

    on () {
      const { validated, store, onUpdate } = this.props;
      return super.on(validated, this.formName, 5, onUpdate, store);
    }
    render () {
      const { store } = this.props;
      const formName = this.formName;

      return <Form>
        <Form.Field
          required label="First name" control={FormFields.TextInput} placeholder="First name"
          onUpdate={this.on()}
          formName={formName} name="firstName" value={ store[`${formName}[firstName]`] }
        />
        <Form.Field
          required label="Last name" control={FormFields.TextInput} placeholder="Last name"
          onUpdate={this.on()}
          formName={formName} name="lastName" value={ store[`${formName}[lastName]`] }
        />
        <Form.Field
          required label="Telephone" control={FormFields.PhoneInput} placeholder="(0) 123 456 789"
          onUpdate={this.on()}
          formName={formName} name={['phone', 'phoneCode']} value={{ phone: store[`${formName}[phone]`], phoneCode: store[`${formName}[phoneCode]`] }}
        />
        <Form.Field
          required label="Email" control={FormFields.TextInput} icon="at" placeholder="email@address.com"
          onUpdate={this.on()}
          formName={formName} name="email" value={ store[`${formName}[email]`] }
        />
      </Form>
    }
  },
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

  componentWillMount() {
    if (this.props.active === 'about') {
      this.props.onChangeRole(ROLE.BRAND.name);
    }
  }
  render () {
    const { active, onChangeRole } = this.props;
    return <div>
      <div style={{ color: 'black', lineHeight: '1.8rem' }} className="shiny black text">
        {(window.matchMedia("(max-width: 767px)").matches) ? "as ... " + Object.entries(ROLE).filter(r => (r[0] == this.props.active))[0][1].title : null }
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
          <Button positive onClick={() => onActivate()} disabled={!validated()}>{TEXT.SIGN_UP.BUTTON.OK}</Button>
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
  validated: PropTypes.func.isRequired,
};

class Page extends React.Component {
  validationTruthy = false;
  validated = (truthy = this.validationTruthy) => {
    return (this.validationTruthy = truthy);
  }

  render () {
    const { active, apiData, onSwitch, onActivate, onDeactivate, onChangeRole, onPayloadUpdate } = this.props;
    const store = apiData[ACTION.API.SIGN_UP] || {};
    const validated = this.validated;

    return <Segment.Group>
      <Segment inverted attached="top" textAlign="center">
        <Header as="h1" sub>{TEXT.SIGN_UP.TITLE}</Header>
      </Segment>
      <Segment attached>
        <Tabs
          active={active}
          onChangeRole={onChangeRole} onUpdate={onPayloadUpdate}
          store={store} validated={validated} />
      </Segment>
      <Footer onSwitch={onSwitch} onDeactivate={onDeactivate} onActivate={() => onActivate(active)} validated={validated}/>
    </Segment.Group>;
  }
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
