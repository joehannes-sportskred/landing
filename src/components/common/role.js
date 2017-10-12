import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Header, Menu } from 'semantic-ui-react';

import { ROLE } from '../../assets/data/enum';

const Component = ({ active, onActivate }) => (
  <Menu icon="labeled">
    {Object.getOwnPropertyNames(ROLE).map((role, k) => {
      const r = ROLE[role];
      return (
        <Menu.Item
          key={r.name + k.toString()}
          className={active === r.name ? r.name.toLowerCase() : ''}
          onClick={() => onActivate(r.name)}
          header
          content={r.title}
          icon={r.icon}
        />
      );
    })}
  </Menu>
);

Component.propTypes = {
  active: PropTypes.string.isRequired,
  onActivate: PropTypes.func.isRequired,
};

export default Component;
