import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from 'semantic-ui-react';

const LayoutLeftyVery = ({ content, className, opts, Style }) => {
  const Content = content;

  return (
    <Container fluid className={className} style={Style}>
      <Grid>
        <Grid.Row only="computer">
          <Grid.Column width={2} />
          <Grid.Column verticalAlign="middle" width={9} style={{ textAlign: 'left' }}>
            <Content.Left />
          </Grid.Column>
          <Grid.Column verticalAlign="middle" width={3}>
            <Content.Right />
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>
        <Grid.Row only="tablet mobile">
          <Grid padded>
            <Grid.Row centered>
              <Content.Left />
            </Grid.Row>
            <Grid.Row centered>
              <Content.Right />
            </Grid.Row>
          </Grid>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

LayoutLeftyVery.propTypes = {
  content: PropTypes.any.isRequired,
  className: PropTypes.string,
  opts: PropTypes.object,
  Style: PropTypes.object,
};

export default LayoutLeftyVery;
