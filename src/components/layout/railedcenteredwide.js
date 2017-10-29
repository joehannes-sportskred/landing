import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from 'semantic-ui-react';

const LayoutRailedCenteredWide = ({ content, className, opts, callback }) => {
  const Content = content;

  return (
    <Grid padded stretched verticalAlign="middle">
      <Grid.Row only="computer" verticalAlign="middle" stretched>
        <Grid.Column width={1} />
        <Grid.Column width={1}>
          <Content.Left />
        </Grid.Column>
        <Grid.Column width={12} stretched>
          <Content.Center callback={callback} />
        </Grid.Column>
        <Grid.Column width={1}>
          <Content.Right />
        </Grid.Column>
        <Grid.Column width={1} />
      </Grid.Row>
      <Grid.Row only="tablet mobile">
        <Grid padded>
          <Grid.Row centered>
            <Content.Center callback={callback} />
          </Grid.Row>
        </Grid>
      </Grid.Row>
    </Grid>
  );
};

LayoutRailedCenteredWide.propTypes = {
  content: PropTypes.any.isRequired,
  className: PropTypes.string,
  opts: PropTypes.object,
  callback: PropTypes.func,
};

export default LayoutRailedCenteredWide;
