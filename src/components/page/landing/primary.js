import React from 'react';
import { Button, Container, Icon, Image, Reveal, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import SocialIcons from '../../common/socialicons';
import Actions from '../../../store/containers/landingactions';
import Roles from '../../../store/containers/role';
import VideoIcons from '../../../store/containers/video_icons';
import Player from '../../../store/containers/player';

import { LINKS, TEXT, VIDEO, VIDEO_ICONS } from '../../../assets/data/enum';

const Left = () => <VideoIcons />;

const Center = () => <Player />;

const Right = () => (
  <Segment.Group compact>
    {Object.keys(LINKS.SOCIAL).map((key, i) => (
      <Segment basic key={`socialicon_${i}`} style={{ transform: 'translateX(-36px)' }}>
        <Button
          as="a"
          circular
          color={key.toLowerCase()}
          size="small"
          icon={key.toLowerCase()}
          href={LINKS.SOCIAL[key]}
          target="_blank"
         />
      </Segment>
    ))}
  </Segment.Group>
);

const Content = { Left, Center, Right };

export default Content;
