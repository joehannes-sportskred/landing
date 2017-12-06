import React from 'react';
import PropTypes from 'prop-types';
import { Button, Dimmer, Label, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown';

import Layout from '../../layout/centeredwide';

import MD from '~/blog/gist.md';

import { TEXT } from '../../../assets/data/enum';

class Gist extends React.Component {
  state = {
    md: null,
    dimmer: false,
  };

  toggleDimmer (bool) {
    this.setState({ dimmer: bool });
  }

  linkFactory () {
    const that = this;
    return class HyperLink extends React.PureComponent {
      render () {
        return (
          <a href={'../../../assets/blog/' + this.props.href.toLowerCase()} onClick={(ev) => {
            ev.stopPropagation();
            ev.preventDefault();

            that.setState({
              dimmer: true,
              md: require('~/blog/articles/' + this.props.href.toLowerCase() + '/article.md'),
            });
            return false;
          }}>
            {this.props.children}
          </a>
        );
      }
    }
  }
  render () {
    return <Segment inverted>
      <ReactMarkdown source={MD} renderers={{ link: this.linkFactory() }} />
      <Dimmer
        as={Sidebar.Pushable}
        active={this.state.dimmer}
        onClickOutside={() => this.toggleDimmer(false)}
        page
        style={{
          overflowY: 'auto',
          overflowX: 'hidden',
          maxWidth: '100vw',
        }}
        className="detail blog page"
      >
        <Sidebar as={Menu} animation="push" direction="top" visible inverted>
          <Menu.Item position="right">
            <Button secondary onClick={() => this.toggleDimmer(false)}>
              {TEXT.DEFAULT.CLOSE}
            </Button>
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher>
          <Layout content={() => (<ReactMarkdown source={this.state.md} />)} />
          <Menu inverted>
            <Menu.Item position="right">
              <Button secondary onClick={() => this.toggleDimmer(false)}>
                {TEXT.DEFAULT.CLOSE}
              </Button>
            </Menu.Item>
          </Menu>
        </Sidebar.Pusher>
      </Dimmer>
    </Segment>;
  }
}

export default Gist;
