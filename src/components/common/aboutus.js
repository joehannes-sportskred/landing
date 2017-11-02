import React from 'react';
import PropTypes from 'prop-types';
import { Button, Divider, Icon, Menu, Sidebar, Responsive } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

import SocialIcons from './socialicons';
import InAction from './inaction';

import { LINKS, TEXT } from '../../assets/data/enum';
import MENU from '../../assets/data/mobilemenu';

const Primary = () => (
  <Menu as="nav" fixed="bottom" fluid size="large" className="bottom about menu">
    <Menu.Item as="article">
      <SocialIcons />
    </Menu.Item>
    <Menu.Item as="article" style={{ display: 'inline-flex', flexGrow: 1 }}>
      <InAction />
    </Menu.Item>
    <Menu.Menu as="article" position="right">
      <Menu.Item as="section">
        <Link to={LINKS.LEGAL.TERMS_OF_USE}>
          {TEXT.TOU.TITLE}
        </Link>
      </Menu.Item>
      <Menu.Item as="section">
        <Link to={LINKS.LEGAL.PRIVACY_POLICY}>
          {TEXT.PP.TITLE}
        </Link>
      </Menu.Item>
      <Menu.Item as="section">
        {TEXT.COPYRIGHT}
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

const Mobile = {
  Menu: ({ active, onActivate }) => (
    <Menu as="nav" fixed="bottom" fluid size="large" className="bottom about menu">
      <Menu.Item as="article">
        <SocialIcons />
      </Menu.Item>
      <Menu.Menu as="article" position="right">
        <Button
          circular
          primary
          icon="sidebar"
          onClick={onActivate}
        />
      </Menu.Menu>
    </Menu>
  ),
  Sidebar: ({ active, activeWhich, onActivate, history }) => (
    <Sidebar as={Menu} animation="scale down" direction="bottom" width="thin" visible={active} vertical inverted>
      <Menu inverted vertical fluid className="tinted">
        {MENU.ABOUT_US.map((item, i) => {
          return item.DIVIDER ?
            <Divider key={"divider" + i} horizontal inverted /> :
            (
              <Menu.Item
                header key={item.TITLE}
                name={item.ACTION}
                active={activeWhich === item.ACTION}
                onClick={() => {
                  onActivate(item.ACTION);
                  history.push(`/${item.LINK}`);
                }}>
                <Icon name={item.ICON} />
                {item.TITLE}
              </Menu.Item>
            );
        })}
      </Menu>
    </Sidebar>
  ),
};

Mobile.Menu.propTypes = {
  active: PropTypes.bool.isRequired,
  onActivate: PropTypes.func.isRequired,
};

Mobile.Sidebar.propTypes = {
  active: PropTypes.bool.isRequired,
  activeWhich: PropTypes.string.isRequired,
  onActivate: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};
Mobile.Sidebar = withRouter(Mobile.Sidebar);

export default {
  Primary,
  Mobile,
};
