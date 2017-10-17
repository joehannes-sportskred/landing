import React from 'react';
import { Button, Container, Icon, Image, Reveal, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';

import SocialIcons from '../../common/socialicons';
import Actions from '../../../store/containers/landingactions';
import Roles from '../../../store/containers/role';
import VIDEO_ICONS from '../../../store/container/video_icons';

import { LINKS, TEXT, VIDEO, VIDEO_ICONS } from '../../../assets/data/enum';

const Left = () => <VIDEO_ICONS />;

class Center extends React.Component {
  state = {
    poster: true,
  }
  render () {
    if (this.state.poster === true) {
      return (
        <Container
          fluid
          onClick={() => this.setState({ poster: false })}
          id="player-wrapper"
        >
          <Image
            src={VIDEO.POSTER}
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
      );
    }
    return (
      <YouTube
        videoId={VIDEO.CODE}
        style={{ opacity: '0.85' }}
        onEnd={() => this.setState({ poster: true })}
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
  }
};

const Right = () => (
  <Segment.Group basic compact>
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
