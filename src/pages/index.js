import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import 'typeface-roboto';
import Masthead from '../components/Masthead';
import SellingPoints from '../components/SellingPoints';
import ConfigurableCodeBlock from '../components/ConfigurableCodeBlock';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Masthead />
    <SellingPoints />
    <ConfigurableCodeBlock />
  </Layout>
);

export default IndexPage;
