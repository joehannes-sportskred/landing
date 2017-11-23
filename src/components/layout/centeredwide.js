import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from 'semantic-ui-react';

const LayoutCenteredWide = ({ content, className, opts, callback, Style }) => {
  const Content = content;

  return (
    <Container fluid textAlign="justified" className={className || ''} style={Style}>
      <Grid style={{ height: '100%' }} stretched verticalAlign="middle">
        <Grid.Row only="computer tablet" verticalAlign="middle">
          <Grid.Column width={2} />
          <Grid.Column width={12}>
            <Content style={{ verticalAlign: 'middle' }} callback={callback} />
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>
        <Grid.Row only="mobile">
          <Grid padded>
            <Grid.Row centered>
              <Content callback={callback} />
            </Grid.Row>
          </Grid>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

LayoutCenteredWide.propTypes = {
  content: PropTypes.any.isRequired,
  className: PropTypes.string,
  opts: PropTypes.object,
  callback: PropTypes.func,
  Style: PropTypes.object,
};

export default LayoutCenteredWide;
