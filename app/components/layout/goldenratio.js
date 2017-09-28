import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from 'semantic-ui-react';

const LayoutGoldenRatio = ({ content, className, opts }) => {
  const Content = content;
  return (
    <Container fluid className={className}>
      <Grid>
        <Grid.Row only="computer" >
          <Grid.Column width={2} />
          <Grid.Column width={7}>
            <Content.Left />
          </Grid.Column >
          <Grid.Column width={6}>
            <Content.Right />
          </Grid.Column>
          <Grid.Column width={1} />
        </Grid.Row>
        <Grid.Row only="computer">
          <Grid.Column width={4} />
          <Grid.Column width={8}>
            <Content.Bottom />
          </Grid.Column>
          <Grid.Column width={4} />
        </Grid.Row>
        <Grid.Row only="tablet mobile">
          <Grid padded>
            <Grid.Row centered>
              <Content.Left />
            </Grid.Row>
            <Grid.Row centered>
              <Content.Right />
            </Grid.Row>
            <Grid.Row centered>
              <Content.Bottom />
            </Grid.Row>
          </Grid>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

LayoutGoldenRatio.propTypes = {
  content: PropTypes.any.isRequired,
  className: PropTypes.string,
  opts: PropTypes.object,
};

export default LayoutGoldenRatio;
