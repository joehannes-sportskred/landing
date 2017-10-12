import React from 'react';
import { Button, Card, Container, Divider, Embed, Header, Icon, Image, Label, Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Chart from '../../common/chart';

import { DATA, TOUR } from '../../../assets/data/enum';

const Home = {
  Left: () => (
    <Image fluid verticalAlign="middle" src="/assets/img/tour/cyclist.png" />
  ),
  Right: () => (
    <Container fluid>
      <Header size="huge" block sub>
        <Header.Content as="h1">
          {TOUR.BRAND.SLOGAN[0]}
        </Header.Content>
        <Header.Content as="h1" color="yellow">
          &nbsp;{TOUR.BRAND.SLOGAN[1]}
        </Header.Content>
      </Header>
      <Divider />
      <Segment.Group horizontal>
        {TOUR.BRAND.ACTION.map((tupel, index) => (
          <Card key={index} as="Segment" color="yellow">
            <Image centered width="100px" src={tupel.IMG} />
            <Card.Header as="h4">
              {tupel.TITLE}
            </Card.Header>
          </Card>
        ))}
      </Segment.Group>
    </Container>
  ),
};

const Discover = {
  Left: () => (
    <Card color="yellow">
      <Image centered width="100px" src={TOUR.BRAND.ACTION[0].IMG} />
      <Card.Header as="h4">
        {TOUR.BRAND.ACTION[0].DESCRIPTION}
      </Card.Header>
    </Card>
  ),
  Right: () => (
    <Container fluid>
      <Header as="h4" style={{ fontWeight: 'bold' }}>
        {TOUR.BRAND.ACTION[0].SLOGAN}
      </Header>
      <Image centered src={TOUR.BRAND.ACTION[0].IMG_DETAIL} />
    </Container>
  ),
};

const Choose = {
  Left: () => (
    <Container fluid>
      <Header as="h4" style={{ fontWeight: 'bold' }}>
        {TOUR.BRAND.ACTION[1].SLOGAN}
      </Header>
      <Image centered src={TOUR.BRAND.ACTION[1].IMG_DETAIL} />
    </Container>
  ),
  Right: () => (
    <Card color="yellow">
      <Image centered width="100px" src={TOUR.BRAND.ACTION[1].IMG} />
      <Card.Header as="h4">
        {TOUR.BRAND.ACTION[1].DESCRIPTION}
      </Card.Header>
    </Card>
  ),
};

const Reach = {
  Left: () => (
    <Card color="yellow">
      <Image centered width="100px" src={TOUR.BRAND.ACTION[2].IMG} />
      <Card.Header as="h4">
        {TOUR.BRAND.ACTION[2].DESCRIPTION}
      </Card.Header>
    </Card>
  ),
  Right: () => (
    <Container fluid>
      <Header as="h4" style={{ fontWeight: 'bold' }}>
        {TOUR.BRAND.ACTION[2].SLOGAN}
      </Header>
      <Image centered src={TOUR.BRAND.ACTION[2].IMG_DETAIL} />
    </Container>
  ),
};

const Measure = {
  Left: () => (
    <Container fluid>
      <Header as="h4" style={{ fontWeight: 'bold' }}>
        {TOUR.BRAND.ACTION[3].SLOGAN}
      </Header>
      <Image centered src={TOUR.BRAND.ACTION[3].IMG_DETAIL} />
    </Container>
  ),
  Right: () => (
    <Card color="yellow">
      <Image centered width="100px" src={TOUR.BRAND.ACTION[3].IMG} />
      <Card.Header as="h4">
        {TOUR.BRAND.ACTION[3].DESCRIPTION}
      </Card.Header>
    </Card>
  ),
};

const Action = () => (
  <Container fluid>
    <Header as="h3" textAlign="center">
      {TOUR.SIGNUP.SLOGAN}
    </Header>
    <Button fluid size="huge" color="yellow">
      {TOUR.SIGNUP.BUTTON}
    </Button>
  </Container>
);

const Content = {
  Home,
  Discover,
  Choose,
  Reach,
  Measure,
  Action,
};

export default Content;
