import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Embed, Header, Icon, Image, Label, Menu, Segment } from 'semantic-ui-react';

import { IMG, TEXT } from '../../../assets/data/enum';

const Left = () => (
  <Segment raised>
    <Card fluid>
      <Icon inverted circular name="users" size="massive" />
      <Card.Content>
        <Card.Header>
          {TEXT.TEAM.TITLE}
        </Card.Header>
        <Card.Description>
          {TEXT.TEAM.EXPLANATION}
        </Card.Description>
      </Card.Content>
    </Card>
  </Segment>
);

const Right = () => (
  <Image floated="right" width="67%" verticalAlign="middle" src={IMG.TEAM} className="shiny white" />
);

const Content = { Left, Right };

export default Content;
