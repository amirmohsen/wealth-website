import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

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

const DesktopNavigation = () => (
  <>
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
  </>
);

export default DesktopNavigation;
