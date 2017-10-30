import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from 'semantic-ui-react';

const LayoutBalanced = ({ Style, content, className, opts }) => {
  const Content = content;

  return (
    <Container fluid className={className} style={Style}>
      <Grid stretched style={{ height: '100%' }}>
        <Grid.Row only="computer">
          <Grid.Column width={2} />
          <Grid.Column verticalAlign="middle" width={6}>
            <Content.Left />
          </Grid.Column>
          <Grid.Column verticalAlign="middle" width={6}>
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

LayoutBalanced.propTypes = {
  content: PropTypes.any.isRequired,
  className: PropTypes.string,
  opts: PropTypes.object,
  Style: PropTypes.object,
};

export default LayoutBalanced;
