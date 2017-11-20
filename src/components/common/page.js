import React from 'react';
import PropTypes from 'prop-types';


class AbstractPage () {
  componentDidMount () {
    this.props.Page
  }
  render () {
    const { page, style } = this.props;
    return <Layout content={page} className="main tour page" style={style} />;
  }
};

AbstractPage.propTypes = {
  ConcretePage: PropTypes.any.isRequired,
  Layout: PropTypes.any.isRequired,
  style: PropTypes.object,
};

export default AbstractPage;
