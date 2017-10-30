import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Transition, Visibility } from 'semantic-ui-react';

class FlexContainer extends Component {
  render () {
    return (
      <div className="flex-container" style={this.props.style}>
        {this.props.children}
      </div>
    );
  };
}

FlexContainer.propTypes = {
  children: PropTypes.any.isRequired,
  style: PropTypes.object,
}

export default FlexContainer;
