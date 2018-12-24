import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withTheme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const InnerWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const Nav = styled.nav`
  margin-left: 50px;
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const NavListItem = styled.li`
  margin: 0;
`;

const NavListLink = styled(Link)`
  color: white;
  margin-right: 30px;

  &,
  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

const HomeLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Grow = styled.div`
  flex-grow: 1;
`;

const SearchWrapper = withTheme()(styled.div`
  && {
    position: relative;
    border-radius: ${({ theme }) => theme.shape.borderRadius};
    background-color: ${({ theme }) => fade(theme.palette.common.white, 0.15)};

    &:hover {
      background-color: ${({ theme }) => fade(theme.palette.common.white, 0.25)};
    }

    margin-left: 0;
    width: 100%;

    ${({ theme }) => theme.breakpoints.up('sm')} {
      margin-left: ${({ theme }) => theme.spacing.unit};
      width: auto;
    }
  }
`);

const SearchIconWrapper = withTheme()(styled.div`
  && {
    width: ${({ theme }) => theme.spacing.unit * 9}px;
    height: 100%;
    position: absolute;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`);

const SearchInputBase = styled(InputBase)`
  && {
    color: inherit;
    width: 100%;
  }
`;

const SearchInput = withTheme()(styled.input`
  && {
    padding-top: ${({ theme }) => theme.spacing.unit}px;
    padding-right: ${({ theme }) => theme.spacing.unit}px;
    padding-bottom: ${({ theme }) => theme.spacing.unit}px;
    padding-left: ${({ theme }) => theme.spacing.unit * 10}px;
    transition: ${({ theme }) => theme.transitions.create('width')};
    width: 100%;

    ${({ theme }) => theme.breakpoints.up('sm')} {
      width: 120px;

      &:focus {
        width: 200px;
      }
    }
  }
`);

const Header = ({ siteTitle }) => (
  <AppBar position="sticky">
    <Toolbar>
      <HomeLink
        to="/"
      >
        <Typography variant="h2" color="inherit" noWrap>
          {siteTitle}
        </Typography>
      </HomeLink>
      <InnerWrap>
        <Nav>
            <NavList>
              <NavListItem>
                <NavListLink to="/getting-started">
                  Getting Started
                </NavListLink>
                <NavListLink to="/guides">
                  Guides
                </NavListLink>
                <NavListLink to="/reference">
                  API Reference
                </NavListLink>
              </NavListItem>
            </NavList>
        </Nav>
      </InnerWrap>
      <Grow />
      <SearchWrapper>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <SearchInputBase
          inputComponent={SearchInput}
          placeholder="Search…"
        />
      </SearchWrapper>
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
