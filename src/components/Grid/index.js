import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components';

const GridWrapper = styled.div`
  padding: 12px;
`;

export const GridContainer = ({ children }) => (
  <AppBar position="static">
    <GridWrapper>
      <Grid container spacing={24}>
        {children}
      </Grid>
    </GridWrapper>
  </AppBar>
);

export const GridItem = ({ children, ...props }) => (
  <Grid item {...props}>
      <Card>
        <CardContent>
          {children}
        </CardContent>
      </Card>
  </Grid>
);
