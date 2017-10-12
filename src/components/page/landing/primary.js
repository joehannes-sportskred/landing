import React from 'react';
import { Button, Embed, Header, Icon, Image, Label, Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import SocialIcons from '../../common/socialicons';
import Actions from '../../../store/containers/landingactions';
import Roles from '../../../store/containers/role';

import { TEXT, VIDEO } from '../../../assets/data/enum';

const Left = () => (
  <Segment.Group raised>
    <Segment attached="top">
      <Embed
        id={VIDEO.CODE}
        placeholder={VIDEO.POSTER}
        source={VIDEO.PROVIDER}
      />
    </Segment>
    <Segment inverted attached="bottom">
      <Header as="h2" content={VIDEO.TITLE} />
    </Segment>
  </Segment.Group>
);

const Right = () => (
  <Segment.Group raised>
    <Segment inverted attached="top">
      <Header as="h1" textAlign="right" content={TEXT.SLOGAN.TITLE} />
    </Segment>
    <Segment attached style={{ textAlign: 'center' }}>
      {TEXT.SLOGAN.EXPLANATION}
    </Segment>
    <Segment.Group horizontal>
      <Segment basic attached className="very">
        <Icon circular inverted size="large" name="trophy" />
      </Segment>
      <Segment basic attached className="very">
        <SocialIcons />
      </Segment>
    </Segment.Group>
  </Segment.Group>
);

const Bottom = () => (
  <Segment.Group raised>
    <Segment inverted attached="top">
      <Header as="h2" content="Choose your role" textAlign="center" />
    </Segment>
    <Segment attached>
      <Roles />
    </Segment>
    <Segment attached="bottom">
      <Actions />
    </Segment>
  </Segment.Group>
);

const Content = { Left, Right, Bottom };

export default Content;
