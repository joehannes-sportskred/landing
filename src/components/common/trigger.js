import React from 'react';
import PropTypes from 'prop-types';

const Up = ({ id }) => (
  <div
    id={id}
    style={{
      position: 'absolute',
      zIndex: -1,
      top: '49%',
      left: '0',
      width: '100%',
      height: '1px',
      backgroundColor: 'transparent',
    }}
  />
);

Up.propTypes = {
  id: PropTypes.string.isRequired,
}

const Down = ({ id }) => (
  <div
    id={id}
    style={{
      position: 'absolute',
      zIndex: -1,
      top: '51%',
      left: '0',
      width: '100%',
      height: '1px',
      backgroundColor: 'transparent',
    }}
  />
);

Down.propTypes = {
  id: PropTypes.string.isRequired,
}

const ScrollTop = ({ id }) => (
  <div
    id={id}
    style={{
      position: 'absolute',
      zIndex: -1,
      top: '0',
      left: '0',
      width: '100%',
      height: '1px',
      backgroundColor: 'transparent',
    }}
  />
);

Down.propTypes = {
  id: PropTypes.string.isRequired,
}

const ScrollBottom = ({ id }) => (
  <div
    id={id}
    style={{
      position: 'absolute',
      zIndex: -1,
      bottom: '0',
      left: '0',
      width: '100%',
      height: '1px',
      backgroundColor: 'transparent',
    }}
  />
);

Down.propTypes = {
  id: PropTypes.string.isRequired,
}

const Component = {
  Up,
  Down,
  ScrollTop,
  ScrollBottom,
}

export default Component;
