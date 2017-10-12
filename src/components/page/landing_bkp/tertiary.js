import React from 'react';
import { Card, Icon, Segment } from 'semantic-ui-react';
import * as d3 from 'd3';
import { ComposedChart, Area, Bar, Line, Legend, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

import { DATA, COLOR, TEXT } from '../../../assets/data/enum';

const Left = () => (
  <ComposedChart
    width={600}
    height={700}
    data={DATA.CHART}
    margin={{ top: 10, right: 0, left: 0, bottom: 10 }}
  >
    <XAxis dataKey="name" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Legend verticalAlign="top" height={36} />
    <Bar dataKey="avg" stroke={COLOR.AVG} fill={COLOR.AVG} fillOpacity={COLOR.TRANSPARENCY} />
    <Line type="monotone" dataKey="avg" stroke={COLOR.AVG} />
    <Area type="monotone" dataKey="Antonio Rodriguez" stroke={COLOR.TEAM} fill={COLOR.TEAM} fillOpacity={COLOR.TRANSPARENCY} />
    <Area type="monotone" dataKey="Sonia Ellinger" stroke={COLOR.BRAND} fill={COLOR.BRAND} fillOpacity={COLOR.TRANSPARENCY} />
    <Area type="monotone" dataKey="Simon Mayfair" stroke={COLOR.ATHLETE} fill={COLOR.ATHLETE} fillOpacity={COLOR.TRANSPARENCY} />
    <Area type="monotone" dataKey="Chris Nadal" stroke={COLOR.MARKETINGAGENT} fill={COLOR.MARKETINGAGENT} fillOpacity={COLOR.TRANSPARENCY} />
  </ComposedChart>
);

const Right = () => (
  <Segment raised>
    <Card fluid>
      <Icon inverted circular name="compass" size="massive" />
      <Card.Content>
        <Card.Header style={{ textAlign: 'right' }}>
          {TEXT.WHY.TITLE}
        </Card.Header>
        <Card.Description style={{ textAlign: 'right' }}>
          {TEXT.WHY.EXPLANATION}
        </Card.Description>
      </Card.Content>
    </Card>
  </Segment>
);

const Content = { Left, Right };

export default Content;
