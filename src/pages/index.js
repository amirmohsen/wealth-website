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
    <ConfigurableCodeBlock>
      {`
        import { Money } from 'wealth';
        import { add, remove, parse } from 'wealth/fn';

        parse('$15.85');
        const moneyA = new Money('15.00', 'USD');
        const moneyB = new Money('30.00', 'USD');
        const total = add(moneyA, moneyB);
      `}
    </ConfigurableCodeBlock>
  </Layout>
);

export default IndexPage;
