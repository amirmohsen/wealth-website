import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import 'typeface-roboto';
import Masthead from '../components/Masthead';
import SellingPoints from '../components/SellingPoints';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Masthead />
    <SellingPoints />
  </Layout>
);

export default IndexPage;
