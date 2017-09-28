import React from 'react';
import PropTypes from 'prop-types';

import * as d3 from 'd3';

const AbstractComponent = ({ SubComponent, dim, data }) => (
  <svg width="100%" height={dim + 'px'}>
    <SubComponent
      x={(570)}
      y={(370)}
      data={data}
      radius={(dim / 3)}
      outerRadius={(dim / 3)}
      innerRadius={(dim / 5)}
      cornerRadius={0}
      padAngle={0}
      style={{ transform: 'translateX(50%)' }}
    />
  </svg>
);

AbstractComponent.propTypes = {
  SubComponent: PropTypes.func.isRequired,
  dim: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
};

class Slice extends React.Component {
  renderSlice({ indexKey, arc, value, label, fill }) {
    console.log(arc.centroid);
    console.log(value);
    console.log(arc.centroid({ ...value, innerRadius: 0, outerRadius: 10 }, indexKey));
    return (
      <g>
        <path d={arc(value)} fill={fill} />
        <text
          transform={`translate(${arc.centroid(value, indexKey)})`}
          dy=".35em"
          textAnchor="middle"
          fill="white"
        >
          {label}
        </text>
      </g>
    );
  }

  render() {
    const { indexKey, value, label, fill, innerRadius = 0, outerRadius } = this.props;
    const arc = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);
    return this.renderSlice({ indexKey, arc, value, label, fill });
  }
}

class DonutSlice extends Slice {
  render() {
    const { indexKey, value, label, fill, innerRadius = 0, outerRadius, cornerRadius, padAngle } = this.props;
    const arc = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .cornerRadius(cornerRadius)
      .padAngle(padAngle);
    return this.renderSlice({ indexKey, arc, value, label, fill });
  }
}

class Pie extends React.Component {
  constructor(props) {
    super(props);
    this.colorScale = d3.schemeCategory10;
    this.renderSlice = this.renderSlice.bind(this);
  }

  renderSlice(value, i) {
    return (
      <Slice
        key={i}
        indexKey={i}
        outerRadius={this.props.radius}
        value={value}
        label={value.data}
        fill={this.colorScale[i]}
      />
    );
  }

  render() {
    const { x, y, data } = this.props;
    // https://github.com/d3/d3/wiki/Pie-Layout
    const pie = d3.pie();
    return (
      <g transform={`translate(${x}, ${y})`}>
        {pie(data).map(this.renderSlice)}
      </g>
    );
  }
}

class Donut extends Pie {
  renderSlice(value, i) {
    const { innerRadius, outerRadius, cornerRadius, padAngle } = this.props;
    return (
      <Slice
        key={i}
        indexKey={i}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        cornerRadius={cornerRadius}
        padAngle={padAngle}
        value={value}
        label={value.data}
        fill={this.colorScale[i]}
      />
    );
  }
}

const PieComponent = ({ dim, data }) => (
  <AbstractComponent SubComponent={Pie} dim={dim} data={data} />
);

PieComponent.propTypes = {
  dim: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
};

const DonutComponent = ({ dim, data }) => (
  <AbstractComponent SubComponent={Donut} dim={dim} data={data} />
);

DonutComponent.propTypes = {
  dim: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
};

const Component = {
  Pie: PieComponent,
  Donut: DonutComponent,
};

export default Component;
