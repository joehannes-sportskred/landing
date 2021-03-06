import React from 'react';
import { Link } from 'react-router-dom';
import {
  Accordion,
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
  Segment,
  Responsive,
} from 'semantic-ui-react';
import Gallery from 'react-photo-gallery';

import { DATA, TOUR, IMG } from '../../../assets/data/enum';
import { TOUR as JSON_TOUR } from '../../../assets/data/sports';

const Home = {
  Left: () => (
    <Segment basic className="image mobile__smaller">
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
      <Card.Group stackable textAlign="center" itemsPerRow="four">
        {TOUR.ATHLETE.ACTION.map((tupel, index) => (
          <Card
            key={index}
            className="children-centered"
            color="orange"
            onClick={() => document
              .querySelector('.page:nth-child(' + (index + 2) + ')')
              .scrollIntoView({block: "start", behavior: "smooth"})
            }
          >
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
  Right: class RightComponent extends React.Component {
    state = { activeIndex: 0 };

    handleClick = (e, titleProps) => {
      const { index } = titleProps
      const { activeIndex } = this.state
      const newIndex = activeIndex === index ? -1 : index

      this.setState({ activeIndex: newIndex })
    }

    render() {
      const { activeIndex } = this.state;

      return <Container fluid className="main profile">
        <Header inverted as="h3" sub textAlign="center" className="discover main header">
          {TOUR.ATHLETE.ACTION[0].SLOGAN}
        </Header>
        <Responsive minWidth={1201}>
          <Tab menu={{ primary: 'true', pointing: true }} panes={IMG.ATHLETE.PROFILE.map((pic, i) => {
            return {
              menuItem: (
                <Menu.Item key={pic} style={{ flexDirection: 'column' }}>
                  <Header sub as="h6" color="orange">{TOUR.ATHLETE.ACTION[0].MENU[i]}</Header>
                </Menu.Item>
              ),
              render: () => <Image fluid src={pic + '.jpg'} />
            };
          })} />
        </Responsive>
        <Responsive maxWidth={1200}>
          <Accordion styled style={{ width: 'auto' }}>
            <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
              <Icon name='dropdown' />
              Profile Overview
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
               <Image fluid src={IMG.ATHLETE.PROFILE[0] + '.png'} />
            </Accordion.Content>
            {IMG.ATHLETE.PROFILE.map((pic, i) => (
              <div key={i}>
                <Accordion.Title active={activeIndex === i + 1} index={i + 1} onClick={this.handleClick}>
                  <Icon name='dropdown' />
                  {TOUR.ATHLETE.ACTION[0].MENU[i]}
                </Accordion.Title>
                <Accordion.Content active={activeIndex === i + 1}>
                   <Image src={IMG.ATHLETE.MOBILE.PROFILE[i] + '.png'} width={(window.clientWidth - 17) || '90%'} />
                </Accordion.Content>
              </div>
            ))}
          </Accordion>
        </Responsive>
      </Container>;
    }
  },
};

const BeDiscovered = {
  Left: () => (
    <Container fluid className="main proposals">
      <Header inverted as="h3" sub textAlign="center" className="packages main header">
        {TOUR.ATHLETE.ACTION[1].SLOGAN}
      </Header>
      <Table selectable>
        <Table.Body>
          {TOUR.ATHLETE.ACTION[1].DETAILS.map((A, key) => (
            <Table.Row key={key}>
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
                <Segment.Group compact>
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
    <Container fluid className="main focus">
      <Header inverted as="h3" sub textAlign="center" className="main measure-impact header">
        {TOUR.ATHLETE.ACTION[3].SLOGAN}
      </Header>
      <Gallery photos={TOUR.ATHLETE.ACTION[3].PHOTOS} columns={4}/>
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
