import React from 'react';
import { Button, Segment } from 'semantic-ui-react';

import Animated from '../../common/animateable';
import PhotoScreen from '../../common/imagescreen';

import { INTRO } from '../../../assets/data/enum';

const Content = {
  Left: ({ callback }) => (
    <Segment.Group>
      <Segment attached="top">
        <Button fluid positive>
          That looks like me!
        </Button>
      </Segment>
      <PhotoScreen callback={callback} imgPath={INTRO.IMAGES.ATHLETES.path} images={INTRO.IMAGES.ATHLETES.src} style={INTRO.IMAGES.ATHLETES.style} animationSource={INTRO.IMAGES.ATHLETES.animationSource} />
    </Segment.Group>
  ),
  Right: ({ callback }) => (
    <Segment.Group>
      <Segment attached="top">
        <Button fluid positive>
          That looks like me!
        </Button>
      </Segment>
      <PhotoScreen callback={callback} imgPath={INTRO.IMAGES.BRANDS.path} images={INTRO.IMAGES.BRANDS.src} style={INTRO.IMAGES.BRANDS.style} animationSource={INTRO.IMAGES.BRANDS.animationSource} />
    </Segment.Group>
  ),
}

export default Content;
