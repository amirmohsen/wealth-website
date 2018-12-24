import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { createGlobalStyle } from 'styled-components';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import Header from './header';

const theme = createMuiTheme();

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
  }

  .line-numbers .line-numbers-rows {
    padding-top: 1rem;
    padding-left: 1rem;
    bottom: 0;
  }
`;

const Layout = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
            <GlobalStyles />
            {children}
          </div>
        </>
      )}
    />
  </MuiThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
