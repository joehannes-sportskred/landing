import React, { Component } from 'react';
import { Button, Embed, Header, Icon, Image, Label, Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import SocialIcons from '../../common/socialicons';
import Actions from '../../../store/containers/landingactions';
import Roles from '../../../store/containers/role';

import { TEXT } from '../../../assets/data/enum';

const Content = () => (
  <Segment.Group>
    <Segment raised>
      <Segment.Group raised>
        <Segment inverted attached="top">
          <Header as="h2" dividing textAlign="center" content={TEXT.HOW.TITLE} />
        </Segment>
        <Segment.Group horizontal>
          <Segment basic attached className="very">
            <Icon circular inverted size="large" name="trophy" />
          </Segment>
          <Segment basic attached className="very">
            <SocialIcons />
          </Segment>
        </Segment.Group>
        <Segment attached="bottom">
          {TEXT.HOW.EXPLANATION}
        </Segment>
      </Segment.Group>
    </Segment>
    <Segment raised>
      <Segment.Group raised>
        <Segment inverted attached="top">
          <Header as="h2" content={TEXT.ROLE.TITLE} />
        </Segment>
        <Segment>
          <Roles />
        </Segment>
        <Segment attached="bottom">
          <Actions />
        </Segment>
      </Segment.Group>
    </Segment>
  </Segment.Group>
);

export default Content;
