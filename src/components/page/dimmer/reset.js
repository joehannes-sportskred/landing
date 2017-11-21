import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Header, Icon, Input, Label, Menu, Select, Segment, Tab } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { ACTION, TEXT } from '../../../assets/data/enum';

const Page = ({ onActivate, onDeactivate }) => {
  return (
    <Segment.Group raised>
      <Segment inverted attached="top">
        <Header sub as="h3">
          {TEXT.RESET.TITLE}
        </Header>
      </Segment>
      <Segment attached>
        <Form>
          <Form.Input label="E-Mail" required width={16}>
            <Input fluid focus placeholder="E-Mail" iconPosition="left" icon="at" />
          </Form.Input>
        </Form>
      </Segment>
      <Segment attached="bottom" textAlign="center">
        <Button.Group>
          <Button negative onClick={onDeactivate}>{TEXT.RESET.BUTTON.CANCEL}</Button>
          <Button.Or />
          <Button positive onClick={onActivate}>{TEXT.RESET.BUTTON.OK}</Button>
        </Button.Group>
      </Segment>
    </Segment.Group>
  );
};

Page.propTypes = {
  onActivate: PropTypes.func.isRequired,
  onDeactivate: PropTypes.func.isRequired,
}

export default Page;
