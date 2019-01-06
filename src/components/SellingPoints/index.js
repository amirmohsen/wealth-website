import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import InnerListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Hidden from '@material-ui/core/Hidden';

const GridWrapper = styled.div`
  padding: 12px;
`;

const GridContainer = ({ children }) => (
  <GridWrapper>
    <Grid container spacing={24}>
      {children}
    </Grid>
  </GridWrapper>
);

const GridItem = ({ title, children, ...props }) => (
  <Grid item {...props}>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {title}
          </Typography>
          {children}
        </CardContent>
      </Card>
  </Grid>
);

const ListItem = ({ title, subtitle }) => (
  <InnerListItem>
    <ListItemText
      primary={title}
      secondary={subtitle}
    />
  </InnerListItem>
);

const First = () => (
  <>
    <ListItem
      title="Safe calculation of large monetary values"
      subtitle="Using strings instead of numbers"
    />
    <ListItem
      title="Money Calculation"
      subtitle="Addition, subtraction, multiplication, division, ceiling, and floring"
    />
  </>
);

const Second = () => (
  <>
    <ListItem
      title="Money Comparison"
      subtitle="Comparing values or currencies"
    />
    <ListItem
      title="Money Allocation"
      subtitle="Allocating by percentages or fixed number"
    />
  </>
);

const Third = () => (
  <>
    <ListItem
      title="Currency Store"
      subtitle="ISO currencies included by default, able to register custom currencies or change currency settings"
    />
    <ListItem
      title="Parser & Formatter"
      subtitle="Customizable"
    />
  </>
);

const DesktopFeatures = () => (
  <Grid container spacing={24}>
    <Grid item md={4}>
      <List>
        <First />
      </List>
    </Grid>
    <Grid item md={4}>
      <List>
        <Second />
      </List>
    </Grid>
    <Grid item md={4}>
      <List>
        <Third />
      </List>
    </Grid>
  </Grid>
);

const MobileFeatures = () => (
  <List>
    <First />
    <Second />
    <Third />
  </List>
);

const SellingPoints = () => (
  <AppBar position="static">
    <GridContainer>
      <GridItem title="Features" xs={12}>
        <Hidden smDown>
          <DesktopFeatures />
        </Hidden>
        <Hidden mdUp>
          <MobileFeatures />
        </Hidden>
      </GridItem>
      <GridItem title="Immutable" xs={12} sm={6}>
        <Typography component="p" variant="subtitle1">
          All instances of Money and Currency are immutable. All operations return a new instance.
        </Typography>
      </GridItem>
      <GridItem title="Functional / Object-oriented" xs={12} sm={6}>
        <Typography component="p" variant="subtitle1">
          Operations on a Money instance can be done in both a functional or object-oriented way.
        </Typography>
      </GridItem>
    </GridContainer>
  </AppBar>
);

export default SellingPoints;
