import React from 'react';
import PropTypes from 'prop-types';
import { Image, Icon, Container, Responsive } from 'semantic-ui-react';

import YouTube from 'react-youtube';

import FlexContainer from '../common/container';

import { VIDEO, VIDEO_ICONS } from '../../assets/data/enum';

const Component = ({ active, video, poster, onActivate }) => {
  return !active ? (
    <Container
      fluid
      id="player-wrapper"
      onClick={() => onActivate(true)}
      style={{ cursor: 'pointer' }}
      className={video === 0 ? 'slogan' : undefined}
    >
      <Image
        id="player-poster"
        src={poster > 0 ? VIDEO_ICONS[poster - 1].POSTER : VIDEO.POSTER}
        height="auto"
        width="auto"
        centered
      />
      <Icon
        size="huge"
        name="play"
        inverted
        width="100%"
        height="100%"
        circular
        className="tinted mobile__hidden"
      />
    </Container>
  ) : (
    <Container fluid id="player-wrapper">
      <Image
        id="player-poster"
        src={poster > 0 ? VIDEO_ICONS[poster - 1].POSTER : VIDEO.POSTER}
        height="auto"
        width="auto"
        centered
      />
      <YouTube
        videoId={video > 0 ? VIDEO_ICONS[video - 1].CODE : VIDEO.CODE}
        onEnd={() => onActivate(false)}
        id="player"
        opts={{
          playerVars: {
            controls: 0,
            showinfo: 0,
            autoplay: true,
          },
        }}
      />
    </Container>
  );
}


Component.propTypes = {
  active: PropTypes.bool.isRequired,
  video: PropTypes.number.isRequired,
  poster: PropTypes.number.isRequired,
  onActivate: PropTypes.func.isRequired,
};

export default Component;
