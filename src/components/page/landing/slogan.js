import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';

import Animated from '../../common/animateable';

import { INTRO } from '../../../assets/data/enum';

class Component extends React.Component {
  render () {
    return (
      <Segment textAlign="center" basic>
        {INTRO.SLOGAN.map((l, key) => (
          <Animated.Letters
            key={key}
            wait={key}
            style={l.style}
            animationSource={l.animationSource}
            letters={l.letters}
            callback={this.props.callback}
          />
        ))}
      </Segment>
    );
  }
}

Component.propTypes = {
  callback: PropTypes.func,
}

export default Component;
