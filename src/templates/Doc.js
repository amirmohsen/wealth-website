import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import Container from '../components/Container';

const BodyContainer = styled(Container)`
  padding: 0 1.0875rem 1.45rem;
`;

const Doc = ({
  data,
}) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <BodyContainer>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </BodyContainer>
    </Layout>
  );
};

export default Doc;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
