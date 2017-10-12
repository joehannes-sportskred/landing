import React from 'react';
import { Button, Embed, Image, Reveal, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import SocialIcons from '../../common/socialicons';
import Actions from '../../../store/containers/landingactions';
import Roles from '../../../store/containers/role';

import { LINKS, TEXT, VIDEO, VIDEO_ICONS } from '../../../assets/data/enum';

const Left = () => (
  <Segment.Group basic compact>
    {VIDEO_ICONS.map((icon, i) => (
      <Segment basic key={`videoicon_${i}`}>
        <Reveal animated='fade' style={{ transform: 'translateX(33px)', zIndex: 9 }}>
          <Reveal.Content visible>
            <Image
              shape="circular"
              size="small"
              src={icon.AVATAR}
              style={{ maxWidth: '69px', marginLeft: '-1px', marginTop: '-1px' }}
            />
          </Reveal.Content>
          <Reveal.Content hidden>
            <Button circular primary size="massive" icon="play" />
          </Reveal.Content>
        </Reveal>
      </Segment>
    ))}
  </Segment.Group>
);

const Center = () => (
  <Embed
    id={VIDEO.CODE}
    placeholder={VIDEO.POSTER}
    source={VIDEO.PROVIDER}
    style={{ opacity: '0.67' }}
  />
);

const Right = () => (
  <Segment.Group basic compact>
    {Object.keys(LINKS.SOCIAL).map((key, i) => (
      <Segment basic key={`socialicon_${i}`} style={{ transform: 'translateX(-69px)' }}>
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
