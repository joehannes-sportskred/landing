import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';

import { IMG } from '../../assets/data/enum';

const Component = ({ logoType }) => (
  <Link to="/">
    <Image src={"/" + unescape(IMG.DYNAMICLOGO.PREFIX) + logoType.toLowerCase() + IMG.DYNAMICLOGO.SUFFIX} size="small" />
  </Link>
);

Component.propTypes = {
  logoType: PropTypes.string.isRequired,
};

export default Component;
