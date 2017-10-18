import React from 'react';
import PropTypes from 'prop-types';
import { Button, Image, Reveal, Segment } from 'semantic-ui-react';

import { VIDEO_ICONS } from '../../assets/data/enum';

const Component = ({ active, onActivate }) => (
  <Segment.Group compact className="video-conatiner-group">
    {VIDEO_ICONS.map((icon, i) => (
      <Segment key={`videoicon_${i}`} basic>
        <Reveal animated="rotate left" className="video-container">
          <Reveal.Content visible>
            <Image
              shape="circular"
              size="small"
              src={icon.AVATAR}
              style={{ maxWidth: '69px', marginLeft: '-1px', marginTop: '-1px' }}
              className={`video-poster ${active == (i + 1) ? 'video-active' : 'video-inactive'}`}
            />
          </Reveal.Content>
          <Reveal.Content hidden className="video-trigger">
            <Button
              circular
              primary
              size="massive"
              icon="play"
              className={`video-trigger ${active == (i + 1) ? 'video-active' : 'video-inactive'}`}
              onClick={ () => active !== (i + 1) && onActivate(i + 1) }
            />
          </Reveal.Content>
        </Reveal>
      </Segment>
    ))}
  </Segment.Group>
);

Component.propTypes = {
  active: PropTypes.number.isRequired,
  onActivate: PropTypes.func.isRequired,
}

export default Component;
