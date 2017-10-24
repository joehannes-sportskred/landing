import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  Checkbox,
  Container,
  Divider,
  Header,
  Icon,
  Image,
  Label,
  Menu,
  Tab,
  Table,
  Segment
} from 'semantic-ui-react';

import { DATA, TOUR, IMG } from '../../../assets/data/enum';
import { TOUR as JSON_TOUR } from '../../../assets/data/sports';

const Home = {
  Left: () => (
    <Segment basic className="image">
      <Image fluid verticalAlign="middle" src={IMG.TOUR.ATHLETE} className="main tour athlete runner image" />
      <Image fluid verticalAlign="middle" src={IMG.TOUR.ATHLETE} className="main tour athlete runner image" />
    </Segment>
  ),
  Right: () => (
    <Container fluid className="one">
      <Segment raised color="orange">
        <Header.Content as="h6">
          <Header as="span">
            {TOUR.ATHLETE.SLOGAN[0]}
          </Header>
          <Header as="span" color="orange">
            &nbsp;{TOUR.ATHLETE.SLOGAN[1]}
          </Header>
        </Header.Content>
      </Segment>
      <Divider />
      <Card.Group textAlign="center" itemsPerRow="four">
        {TOUR.ATHLETE.ACTION.map((tupel, index) => (
          <Card key={index} className="children-centered" color="orange">
            <Icon color="orange" size="large" name={tupel.ICON} />
            <Segment basic padded className="rotated-icon-border" />
            <Card.Header>
              <Header color="orange" textAlign="center" as="h4">
                {tupel.TITLE}
              </Header>
            </Card.Header>
          </Card>
        ))}
      </Card.Group>
    </Container>
  ),
};

const Profile = {
  Left: () => (
    <Card color="orange" className="children-centered" color="orange">
      <Icon color="orange" size="large" name={TOUR.ATHLETE.ACTION[0].ICON} />
      <Segment basic padded className="rotated-icon-border" />
      <Card.Header as="h4">
        {TOUR.ATHLETE.ACTION[0].DESCRIPTION}
      </Card.Header>
    </Card>
  ),
  Right: () => (
    <Container fluid className="main profile">
      <Header inverted as="h3" sub textAlign="center" className="discover main header">
        {TOUR.ATHLETE.ACTION[0].SLOGAN}
      </Header>
      <Tab menu={{ primary: true, pointing: true }} panes={IMG.ATHLETE.PROFILE.map((pic, i) => {
        return {
          menuItem: (
            <Menu.Item key={pic} style={{ flexDirection: 'column' }}>
              <Header sub as="h6" color="orange">{TOUR.ATHLETE.ACTION[0].MENU[i]}</Header>
            </Menu.Item>
          ),
          render: () => <Image fluid src={pic} />
        };
      })} />
    </Container>
  ),
};

const BeDiscovered = {
  Left: () => (
    <Container fluid className="main choose-packages">
      <Header inverted as="h3" sub textAlign="center" className="packages main header">
        {TOUR.ATHLETE.ACTION[1].SLOGAN}
      </Header>
      Empty
    </Container>
  ),
  Right: () => (
    <Card color="orange">
      <Icon color="orange" size="large" name={TOUR.ATHLETE.ACTION[1].ICON} />
      <Segment basic padded className="rotated-icon-border" />
      <Card.Header as="h4">
        {TOUR.ATHLETE.ACTION[1].DESCRIPTION}
      </Card.Header>
    </Card>
  ),
};

const Monetise = {
  Left: () => (
    <Card color="orange">
      <Icon color="orange" size="large" name={TOUR.ATHLETE.ACTION[2].ICON} />
      <Segment basic padded className="rotated-icon-border" />
      <Card.Header as="h4">
        {TOUR.ATHLETE.ACTION[2].DESCRIPTION}
      </Card.Header>
    </Card>
  ),
  Right: () => (
    <Container id="svg_flower" fluid className="main reach-audience">
      <Header inverted as="h3" sub textAlign="center" className="main reach-audience header">
        {TOUR.ATHLETE.ACTION[2].SLOGAN}
      </Header>
      <Segment className="childrenCentered" style={{ marginTop: '0' }}>
        Empty
      </Segment>
    </Container>
  ),
};

const Focus = {
  Left: () => (
    <Container fluid className="main measure-impact">
      <Header inverted as="h3" sub textAlign="center" className="main measure-impact header">
        {TOUR.ATHLETE.ACTION[3].SLOGAN}
      </Header>
      Empty
    </Container>
  ),
  Right: () => (
    <Card color="orange">
      <Icon color="orange" size="large" name={TOUR.ATHLETE.ACTION[3].ICON} />
      <Segment basic padded className="rotated-icon-border" />
      <Card.Header as="h4">
        {TOUR.ATHLETE.ACTION[3].DESCRIPTION}
      </Card.Header>
    </Card>
  ),
};

const Action = () => (
  <Container fluid className="main action-signup">
    <Header inverted as="h3" sub textAlign="center" className="main action-signup header">
      {TOUR.SIGNUP.SLOGAN}
    </Header>
    <Button fluid size="huge" color="orange">
      {TOUR.SIGNUP.BUTTON}
    </Button>
  </Container>
);

const Content = {
  Home,
  Profile,
  BeDiscovered,
  Monetise,
  Focus,
  Action,
};

export default Content;
