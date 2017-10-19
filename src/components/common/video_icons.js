import React from 'react';
import PropTypes from 'prop-types';
import { Button, Image, Reveal, Segment, Popup } from 'semantic-ui-react';

import { VIDEO_ICONS } from '../../assets/data/enum';

const Component = ({ active, onActivate }) => (
  <Segment.Group compact className="video-conatiner-group">
    {VIDEO_ICONS.map((icon, i) => (
      <Segment key={`videoicon_${i}`} basic>
        <Reveal className="video-container">
          <Reveal.Content hidden className="video-trigger">
            <Popup
              position="right center"
              trigger={(
                <Button
                  circular
                  primary
                  size="massive"
                  icon="play"
                  className={`${active == (i + 1) ? 'video-active' : 'video-inactive'}`}
                  onClick={ () => active !== (i + 1) && onActivate(i + 1) }
                  style={{ width: '69px' }}
                />
              )}
              style={{
                padding: '0',
                animation: 'movein-right .5s ease-out',
              }}
              wide="very"
            >
              <Segment.Group>
                <Segment basic>
                  {icon.TOOLTIP.NAME}
                </Segment>
                <Segment basic inverted>
                  {icon.TOOLTIP.HASHTAGS}
                </Segment>
              </Segment.Group>
            </Popup>
          </Reveal.Content>
          <Reveal.Content visible className="video-poster">
            <Image
              shape="circular"
              size="small"
              src={icon.AVATAR}
              style={{ maxWidth: '69px', marginTop: '-1px' }}
              className={`${active == (i + 1) ? 'video-active' : 'video-inactive'}`}
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
