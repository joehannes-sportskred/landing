import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Dimmer, Loader, Sidebar, Ref } from 'semantic-ui-react';

class FlexContainer extends Component {
  state = {
    init: true,
  }
  preloadImages (baseNode) {
    const node = ReactDOM.findDOMNode(baseNode);
    const images = node.querySelectorAll('img');
    let nrOfImages = images.length;
    const that = this;
    const imagesLoaded = function() {
      this.removeEventListener('load', imagesLoaded);
      if (--nrOfImages === 0) {
        that.setState({ init: false });
      }
    }

    images.forEach(img => img.addEventListener('load', imagesLoaded));
  }
  componentDidUpdate () {
    (!this.state.init && this.props.onLoad) && this.props.onLoad();
  }
  render () {
    return (
      <Sidebar.Pushable style={{ minHeight: 'inherit' }}>
        <Sidebar visible={this.state.init}>
          <Dimmer page active={this.state.init}>
            <Loader size="massive">
              Loading ...
            </Loader>
          </Dimmer>
        </Sidebar>
        <Sidebar.Pusher as={Ref} innerRef={this.preloadImages.bind(this)}>
          <div className={(this.props.className || "") + " flex-container"} style={this.props.style}>
            {this.props.children}
          </div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  };
}

FlexContainer.propTypes = {
  children: PropTypes.any.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
  onLoad: PropTypes.func,
  pxHeight: PropTypes.number,
}

export default FlexContainer;
