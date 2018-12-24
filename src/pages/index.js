import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import 'typeface-roboto';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Wealth</h1>
    <p>
      JavaScript library for handling money calculation, allocation, formatting, serialization, and currency handling.
    </p>
  </Layout>
);

export default IndexPage;
