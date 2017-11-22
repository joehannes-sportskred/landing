import React from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from 'recharts';
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
import { Graph } from 'react-d3-graph';

import Scrollable from '../../../util/scrollable';

import Chart from '../../common/chart';

import { DATA, TOUR, IMG } from '../../../assets/data/enum';
import { TOUR as JSON_TOUR } from '../../../assets/data/sports';
import { FLOWER_DATA as flowerData, FLOWER_CONFIG as flowerConfig } from '../../../assets/data/graph';

const Home = {
  Left: () => (
    <Segment basic className="image">
      <Image fluid verticalAlign="middle" src={IMG.TOUR.MARKETEER} className="cyclist" />
      <Image fluid verticalAlign="middle" src={IMG.TOUR.MARKETEER} className="cyclist" />
      <Image fluid verticalAlign="middle" src={IMG.TOUR.MARKETEER} className="cyclist" />
    </Segment>
  ),
  Right: () => (
    <Container fluid className="one">
      <Segment raised color="orange">
        <Header.Content as="h6" style={{ textAlign: 'center' }}>
          <Header as="span">
            {TOUR.BRAND.SLOGAN[0]}
          </Header>
          <Header as="span" color="orange">
            &nbsp;{TOUR.BRAND.SLOGAN[1]}
          </Header>
        </Header.Content>
      </Segment>
      <Divider />
      <Card.Group stackable textAlign="center" itemsPerRow="four">
        {TOUR.BRAND.ACTION.map((tupel, index) => (
          <Card
            key={index}
            className="children-centered"
            color="orange"
            onClick={() => Scrollable.scrollTo(document.querySelector('.page:nth-child(' + (index + 2) + ')')) }
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

const Discover = {
  Left: () => (
    <Card color="orange" className="children-centered" color="orange">
      <Icon color="orange" size="large" name={TOUR.BRAND.ACTION[0].ICON} />
      <Segment basic padded className="rotated-icon-border" />
      <Card.Header as="h4">
        {TOUR.BRAND.ACTION[0].DESCRIPTION}
      </Card.Header>
    </Card>
  ),
  Right: () => (
    <Container fluid className="main discover">
      <Header inverted as="h3" sub textAlign="center" className="discover main header">
        {TOUR.BRAND.ACTION[0].SLOGAN}
      </Header>
      <Image centered src={TOUR.BRAND.ACTION[0].IMG_DETAIL_MAIN} className="discover main image"/>
      <Image centered src={TOUR.BRAND.ACTION[0].IMG_DETAIL_DETAIL_1} className="discover dummy invisible image"/>
      <Image centered src={TOUR.BRAND.ACTION[0].IMG_DETAIL_DETAIL_1} className="discover detail image one"/>
      <Image centered src={TOUR.BRAND.ACTION[0].IMG_DETAIL_DETAIL_2} className="discover detail image two"/>
    </Container>
  ),
};

const Choose = {
  Left: () => (
    <Container fluid className="main choose-packages">
      <Header inverted as="h3" sub textAlign="center" className="packages main header">
        {TOUR.BRAND.ACTION[1].SLOGAN}
      </Header>
      <Tab menu={{ secondary: true, pointing: true }} panes={Object.keys(TOUR.BRAND.PACKAGES).map(p => {
        return {
          menuItem: (
            <Menu.Item key={p.toLowerCase()} style={{ flexDirection: 'column' }}>
              {
                (window.matchMedia("(max-width: 767px)").matches) ?
                <Icon inverted name={p.toLowerCase()}/> :
                <Header sub as="h5" color="orange">{p}</Header>
              }
              <Label>{5000 + Math.round(Math.random() * 50000)}</Label>
            </Menu.Item>
          ),
          render: () => (
            <Table striped>
              <Table.Body>
                {Object.keys(TOUR.BRAND.PACKAGES[p]).map(_p => (
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Label ribbon>{`${_p.charAt(0)}${_p.slice(1).toLowerCase()} Package`}</Label>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        {TOUR.BRAND.PACKAGES[p][_p].TEXT}
                      </Table.Cell>
                      <Table.Cell>
                        <Checkbox toggle disabled={false} checked={TOUR.BRAND.PACKAGES[p][_p].SELECTED} />
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                ).props.children)}
              </Table.Body>
            </Table>
          )
        };
      })} />
    </Container>
  ),
  Right: () => (
    <Card color="orange">
      <Icon color="orange" size="large" name={TOUR.BRAND.ACTION[1].ICON} />
      <Segment basic padded className="rotated-icon-border" />
      <Card.Header as="h4">
        {TOUR.BRAND.ACTION[1].DESCRIPTION}
      </Card.Header>
    </Card>
  ),
};

const Reach = {
  Left: () => (
    <Card color="orange">
      <Icon color="orange" size="large" name={TOUR.BRAND.ACTION[2].ICON} />
      <Segment basic padded className="rotated-icon-border" />
      <Card.Header as="h4">
        {TOUR.BRAND.ACTION[2].DESCRIPTION}
      </Card.Header>
    </Card>
  ),
  Right: class ReachComponent extends React.Component {
    state = {
      width: 500,
    }
    componentDidMount () {
      this.setState({ width: document.getElementById("flower-container").clientWidth });
    }
    render () {
      return <Container id="svg_flower" fluid className="main reach-audience">
        <Header inverted as="h3" sub textAlign="center" className="main reach-audience header">
          {TOUR.BRAND.ACTION[2].SLOGAN}
        </Header>
        <Segment id="flower-container" className="childrenCentered" style={{ marginTop: '0', padding: '0' }}>
          <Graph
             id='flower'
             data={flowerData}
             config={{...flowerConfig, width: this.state.width }}
          />
        </Segment>
      </Container>
    }
  },
};

const Measure = {
  Left: () => (
    <Container fluid className="main measure-impact">
      <Header inverted as="h3" sub textAlign="center" className="main measure-impact header">
        {TOUR.BRAND.ACTION[3].SLOGAN}
      </Header>
      <Segment>
        <BarChart width={500} height={250} data={JSON_TOUR.IMPRESSIONS}
          margin={{top: 5, right: 30, left: 5, bottom: 5}}>
           <XAxis dataKey="name"/>
           <YAxis/>
           <CartesianGrid strokeDasharray="3 3"/>
           <Tooltip/>
           <Legend />
           <Bar dataKey="facebook" fill="#4267b2" />
           <Bar dataKey="twitter" fill="#1DA1F2" />
           <Bar dataKey="instagram" fill="#8a3ab9" />
           <Bar dataKey="youtube" fill="#ff0000" />
        </BarChart>
        <RadarChart cx={200} cy={250} outerRadius={150} width={500} height={450} data={JSON_TOUR.RADAR}>
          <Radar name="Facebook" dataKey="Facebook" stroke="#4267b2" fill="#4267b2" fillOpacity={0.1}/>
          <Radar name="Twitter" dataKey="Twitter" stroke="#1DA1F2" fill="#1DA1F2" fillOpacity={0.1}/>
          <Radar name="Youtube" dataKey="Youtube" stroke="#8a3ab9" fill="#8a3ab9" fillOpacity={0.1}/>
          <Radar name="Instagram" dataKey="Instagram" stroke="#ff0000" fill="#ff0000" fillOpacity={0.1}/>
          <PolarGrid />
          <Legend />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 100]}/>
        </RadarChart>
      </Segment>
    </Container>
  ),
  Right: () => (
    <Card color="orange">
      <Icon color="orange" size="large" name={TOUR.BRAND.ACTION[3].ICON} />
      <Segment basic padded className="rotated-icon-border" />
      <Card.Header as="h4">
        {TOUR.BRAND.ACTION[3].DESCRIPTION}
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
  Discover,
  Choose,
  Reach,
  Measure,
  Action,
};

export default Content;
