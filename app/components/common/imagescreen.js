import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';

import Animated from './animateable';

import { INTRO } from '../../assets/data/enum';

class Component extends React.Component {
  render () {
    return (
      <Segment raised stacked inverted className="lightly" textAlign="center" style={{ minHeight: '512px' }} attached="bottom">
        {this.props.images.map((l, key) => (
          <Animated.Photo
            callback={this.props.callback}
            key={key}
            wait={key}
            style={this.props.style}
            animationSource={this.props.animationSource}
            src={this.props.imgPath + l}
          />
        ))}
      </Segment>
    );
  }
}

Component.propTypes = {
  images: PropTypes.any.isRequired,
  style: PropTypes.any,
  animationSource: PropTypes.func.isRequired,
  imgPath: PropTypes.string.isRequired,
  callback: PropTypes.func,
}

export default Component;
