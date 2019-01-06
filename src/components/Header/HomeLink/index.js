import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from '../../logo.inline.svg';

const StyledLink = styled(Link)`
  display: flex;
  color: white;
  text-decoration: none;
  align-items: center;
`;

const StyledLogo = styled(Logo)`
  width: 50px;
  fill: #fff;
`;

const StyledHeader = styled('h2')`
  margin: 0 0 0 20px;
  font-size: 2rem;
  font-weight: 300;
`;

const HomeLink = ({ children }) => (
  <StyledLink
    to="/"
  >
    <StyledLogo />
    <StyledHeader variant="display3" color="inherit" noWrap>
      {children}
    </StyledHeader>
  </StyledLink>
);

export default HomeLink;
