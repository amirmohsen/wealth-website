import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'
import { MuiThemeProvider } from '@material-ui/core/styles'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import Header from '../Header'
import theme from './theme'
import ConfigurableCodeBlockProvider from '../ConfigurableCodeBlock/Provider'
import Footer from '../Footer'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  }

  .line-numbers .line-numbers-rows {
    padding-top: 1rem;
    padding-left: 1rem;
    bottom: 0;
  }
`

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const ContentWrapper = styled.div`
  overflow: hidden;
`

const Layout = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <StaticQuery
      query={query}
      render={data => (
        <>
          <GlobalStyles />
          <Header siteTitle={data.site.siteMetadata.title} />
          <ContentWrapper>
            <ConfigurableCodeBlockProvider>
              {children}
            </ConfigurableCodeBlockProvider>
          </ContentWrapper>
          <Footer />
        </>
      )}
    />
  </MuiThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
