import React from 'react';
import PropTypes from 'prop-types';
import { Image, Icon, Container } from 'semantic-ui-react';

import YouTube from 'react-youtube';

import { VIDEO, VIDEO_ICONS } from '../../assets/data/enum';

const Component = ({ active, video, poster, onActivate }) => {
  return active ? (
    <Container
      fluid
      onClick={() => onActivate(true)}
      id="player-wrapper"
    >
      <Image
        src={poster ? VIDEO_ICONS[poster].POSTER : VIDEO.POSTER}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translateY(-50%) translateX(-50%)',
       }}
       height="100%"
       width="auto"
       centered
      />
      <Icon
        size="massive"
        name="play"
        inverted
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translateX(-50%) translateY(-50%)',
        }}
        width="100%"
        height="100%"
      />
    </Container>
  ) : (
    <YouTube
      videoId={video ? VIDEO_ICONS[video].CODE : VIDEO.CODE}
      style={{ opacity: '0.85' }}
      onEnd={() => onActivate(false)}
      id="player"
      opts={{
        playerVars: {
          controls: 0,
          showinfo: 0,
          autoplay: true,
        }
      }}
    />
  );
};

Component.propTypes = {
  active: PropTypes.bool.isRequired,
  video: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  onActivate: PropTypes.func.isRequired,
};

export default Component;
