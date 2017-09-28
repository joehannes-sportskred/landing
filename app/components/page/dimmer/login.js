import React from 'react';
import PropTypes from 'prop-types';
import { Button, Checkbox, Form, Header, Icon, Input, Label, Menu, Select, Segment, Tab } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { ACTION, TEXT } from '../../../assets/data/enum';

const Page = ({ onSwitch, onActivate, onDeactivate }) => {
  const Reset = () => (<Form.Button onClick={() => onSwitch(ACTION.DIMMER.RESET)} content="Forgot?" attached="right" />);
  return (
    <Segment.Group raised>
      <Segment inverted attached="top">
        <Header sub as="h1" textAlign="center">
          {TEXT.LOG_IN.TITLE}
        </Header>
      </Segment>
      <Segment attached>
        <Form>
          <Form.Input label="E-Mail" required width={16}>
            <Input fluid focus placeholder="E-Mail" iconPosition="left" icon="at" label={{ icon: 'asterisk' }} labelPosition="right corner" />
          </Form.Input>
          <Form.Input label="Password" required width={16}>
            <Input fluid>
              <Input label={{ icon: 'asterisk' }} labelPosition="left corner" type="password" placeholder="Password" />
              <Reset />
            </Input>
          </Form.Input>
          <Form.Checkbox inline toggle label="Remember me" />\
        </Form>
      </Segment>
      <Segment attached textAlign="center">
        <Button.Group>
          <Button negative onClick={onDeactivate}>{TEXT.LOG_IN.BUTTON.CANCEL}</Button>
          <Button.Or />
          <Button positive onClick={onActivate}>{TEXT.LOG_IN.BUTTON.OK}</Button>
        </Button.Group>
      </Segment>
      <Segment attached="bottom">
        <Header as="h6" sub textAlign="center">
          {TEXT.LOG_IN.SIGN_UP.PREFIX}
          <a onClick={() => onSwitch(ACTION.DIMMER.SIGN_UP)} style={{ cursor: 'pointer' }}>
            {TEXT.LOG_IN.SIGN_UP.LINK}
          </a>
          {TEXT.LOG_IN.SIGN_UP.SUFFIX}
        </Header>
      </Segment>
    </Segment.Group>
  );
};

Page.propTypes = {
  onSwitch: PropTypes.func.isRequired,
  onActivate: PropTypes.func.isRequired,
  onDeactivate: PropTypes.func.isRequired,
}

export default Page;
