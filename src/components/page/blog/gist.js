import React from 'react';
import PropTypes from 'prop-types';
import { Button, Checkbox, Form, Header, Icon, Input, Label, Menu, Select, Segment, Tab } from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown';

import MD from '../../../assets/blog/gist.md';

const Link = (thisAndThat) => {
  const _this = thisAndThat;
  return class HyperLink extends React.PureComponent {
    that = _this;
    setMD (that, ev, fileName) {
      const MdFile = require('../../../assets/blog/articles/' + fileName.toLowerCase() + '.md' );
      that.setState({ md: MdFile });
      ev.stopPropagation();
      return false;
    }
    render () {
      return <a href="javascript:;" onClick={(ev) => this.setMD(this.that, ev, this.props.href)}>{this.props.children}</a>;
    }
  }
}

class Gist extends React.Component {
  state = {
    md: MD,
  };
  render () {
    return <Segment inverted>
      <ReactMarkdown source={this.state.md} renderers={{ link: Link(this) }} />
    </Segment>;
  }
}

export default Gist;
