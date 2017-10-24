import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  Checkbox,
  Container,
  Divider,
  Feed,
  Header,
  Icon,
  Image,
  Item,
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
    <Container fluid className="main proposals">
      <Header inverted as="h3" sub textAlign="center" className="packages main header">
        {TOUR.ATHLETE.ACTION[1].SLOGAN}
      </Header>
      <Table selectable>
        <Table.Body>
          {TOUR.ATHLETE.ACTION[1].DETAILS.map(A => (
            <Table.Row>
              <Table.Cell>
                <Image verticalAlign="top" shape="circular" size="mini" src={A.LOGO} className="athlete proposal logo" />
              </Table.Cell>
              <Table.Cell>
                <Item>
                  <Item.Content>
                    <Item.Header as="h4">{A.TRADEMARK}</Item.Header>
                    <Item.Description>
                      <Header as="h3">{A.TITLE}</Header>
                    </Item.Description>
                    <Item.Extra style={{ fontSize: '0.5rem', marginTop: '1rem' }}>
                      <Item.Meta><span style={{ color: 'gray' }}>Duration:</span> {A.DURATION}</Item.Meta>
                      <Item.Meta><span style={{ color: 'gray' }}>Deadline to reply to this offer:</span> {A.DEADLINE}</Item.Meta>
                    </Item.Extra>
                  </Item.Content>
                </Item>
              </Table.Cell>
              <Table.Cell>
                <Segment.Group textAlign="right" compact>
                  <Segment basic>
                    <Label
                      color={
                        A.LABEL == "positive" ?
                          "green" :
                          A.LABEL == "primary" ?
                            "orange" : "blue"
                      }
                      style={{ float: 'right' }}
                    >
                      {TOUR.ATHLETE.PROPOSAL.STATE[A.LABEL]}
                    </Label>
                  </Segment>
                  <Segment basic>
                    <Header textAlign="right" as="h5">{A.OFFER}</Header>
                  </Segment>
                  <Segment basic>
                    <Header textAlign="right" as="h6">{A.DATE}</Header>
                  </Segment>
                </Segment.Group>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
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
    <Container id="svg_flower" fluid className="main monetise">
      <Header inverted as="h3" sub textAlign="center" className="main reach-audience header">
        {TOUR.ATHLETE.ACTION[2].SLOGAN}
      </Header>
      <Segment style={{ marginTop: '0' }}>
        <Image fluid src={TOUR.ATHLETE.ACTION[2].IMG_DETAIL} />
        <Feed events={TOUR.ATHLETE.ACTION[2].FEED} />
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
