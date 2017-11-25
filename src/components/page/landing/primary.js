import React from 'react';
import { Button, Container, Icon, Image, Reveal, Segment, Responsive } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Actions from '../../../store/containers/landingactions';
import Roles from '../../../store/containers/role';
import Player from '../../../store/containers/player';
import VideoIcons from '../../../store/containers/video_icons';

import SocialIcons from '../../common/socialicons';
import InActionButtons from '../../common/inaction';

import { LINKS, TEXT, VIDEO, VIDEO_ICONS } from '../../../assets/data/enum';

const Left = () =>
  <Responsive maxWidth="767">
    <div
      className="slogan"
      style={{ lineHeight: "5rem" }}
    >
      &nbsp;
    </div>
    <VideoIcons />
  </Responsive>;

const Center = () =>
  <div>
    <Responsive minWidth="768">
      <VideoIcons />
    </Responsive>
    <Player />
  </div>;

const Right = () =>
  <Responsive maxWidth="767" className="inaction-buttons">
    <InActionButtons />
  </Responsive>;
/*
  <Segment.Group compact className="social-icons-vertical-container">
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
          className="shiny dark"
         />
      </Segment>
    ))}
  </Segment.Group>
);
*/

const Content = { Left, Center, Right };

export default Content;
