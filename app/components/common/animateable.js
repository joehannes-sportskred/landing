import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Header, Image } from 'semantic-ui-react';

class Animated extends React.Component {
  componentDidMount (callback) {
    const node = ReactDOM.findDOMNode(this);
    node.style.display = 'none';
    setTimeout(() => {
      node.style.display = 'block';
      this.props.animationSource(node.hasChildNodes() ? node.childNodes : node, callback);
    }, this.props.wait * 400);
  }

  render() {
    return <div />;
  }
}

class Letters extends Animated {
  componentDidMount() {
    super.componentDidMount(this.props.callback);
  }
  render () {
    return (
      <Header as="h1" style={this.props.style}>
        {this.props.letters.split('').map((w, key) => <span key={key}>{w}</span>)}
      </Header>
    );
  }
}

Letters.propTypes = {
  style: PropTypes.any,
  animationSource: PropTypes.func.isRequired,
  letters: PropTypes.string.isRequired,
  callback: PropTypes.func,
}

class Photo extends Animated {
  render () {
    return <Image src={this.props.src} style={this.props.style} width="50%" className="fancy image" />;
  }
}

Photo.propTypes = {
  style: PropTypes.any,
  animationSource: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
}

const Component = {
  Letters,
  Photo,
};

export default Component;
