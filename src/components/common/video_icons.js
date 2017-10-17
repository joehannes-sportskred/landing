import React from 'react';
import { Button, Image, Reveal, Segment } from 'semantic-ui-react';

import { VIDEO_ICONS } from '../../../assets/data/enum';

const Component = ({ active, onActivate }) => (
  <Segment.Group compact basic>
    {VIDEO_ICONS.map((icon, i) => (
      <Segment basic key={`videoicon_${i}`}>
        <Reveal animated='fade' style={{ transform: 'translateX(33px)', zIndex: 9 }}>
          <Reveal.Content visible>
            <Image
              shape="circular"
              size="small"
              src={icon.AVATAR}
              style={{ maxWidth: '69px', marginLeft: '-1px', marginTop: '-1px' }}
              className={ active == (i + 1) ? 'video-active' : 'video-inactive' }
            />
          </Reveal.Content>
          <Reveal.Content hidden>
            <Button
              circular
              primary
              size="massive"
              icon="play"
              className={ active == (i + 1) ? 'video-active' : 'video-inactive' }
              onClick={ () => onActivate(i + 1) }
            />
          </Reveal.Content>
        </Reveal>
      </Segment>
    ))}
  </Segment.Group>
);

Component.propTypes = {
  active: PropTypes.string.isRequired,
  onActivate: PropTypes.func.isRequired,
}

export default Component;
