import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from 'semantic-ui-react';

const LayoutCentered = ({ content, className, opts }) => {
  const Content = content;

  return (
    <Container fluid textAlign="justified" className={className}>
      <Grid>
        <Grid.Row only="computer">
          <Grid.Column width={4} />
          <Grid.Column width={8}>
            <Content style={{ textAlign: 'center' }} />
          </Grid.Column >
          <Grid.Column width={4} />
        </Grid.Row>
        <Grid.Row only="tablet mobile">
          <Grid padded>
            <Grid.Row centered>
              <Content />
            </Grid.Row>
          </Grid>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

LayoutCentered.propTypes = {
  content: PropTypes.any.isRequired,
  className: PropTypes.string,
  opts: PropTypes.object,
};

export default LayoutCentered;
