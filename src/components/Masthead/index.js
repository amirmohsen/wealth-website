import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { withTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Logo from '../logo.inline.svg';

const Wrapper = withTheme()(styled.div`
  position: relative;
  display: flex;
  height: 400px;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.secondary.dark};
  overflow: hidden;
`);

const Header = withTheme()(styled.h1`
  font-size: 4rem;
  margin: auto 0 30px;
  color: ${({ theme }) => theme.palette.secondary.contrastText};
`);

const TagLine = withTheme()(styled.div`
  font-size: 1.5rem;
  margin: 0 10px 40px 10px;
  text-align: center;
  color: #63b9ec;
`);

const StyledLogo = withTheme()(styled(Logo)`
  position: absolute;
  fill: ${({ theme }) => theme.palette.secondary.contrastText};
  opacity: 0.1;
  width: 500px;
  max-width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
  margin: auto;
  user-select: none;
  pointer-events: none;
`);

const GettingStartedButton = styled(Button)`
  && {
    color: #63b9ec;
    border-color: #63b9ec;
    margin-bottom: auto;
  }
`;

const Masthead = () => (
  <Wrapper>
    <StyledLogo />
    <Header>Wealth</Header>
    <TagLine>
      A modern JavaScript library for all your money and currency needs
    </TagLine>
    <GettingStartedButton component={Link} to="/getting-started" variant="outlined">
        Gettting started
    </GettingStartedButton>
  </Wrapper>
);

export default Masthead;
