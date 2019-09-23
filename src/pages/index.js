import React, { Component } from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import 'typeface-roboto'
import Masthead from '../components/Masthead'
import SellingPoints from '../components/SellingPoints'
import ConfigurableCodeBlock from '../components/ConfigurableCodeBlock'

class IndexPage extends Component {
  state = {
    load: false,
  }
  componentDidMount() {
    this.setState({
      load: true,
    })
  }

  render() {
    return (
      this.state.load && (
        <Layout>
          <SEO title="Home" />
          <Masthead />
          <SellingPoints />
          <ConfigurableCodeBlock>
            {`
            import { Money } from 'wealth';
            import { add, parse } from 'wealth/fn';

            parse('$15.85');
            const moneyA = Money.init('15.00', 'USD');
            const moneyB = Money.init('30.00', 'USD');
            const total = add(moneyA, moneyB);
          `}
          </ConfigurableCodeBlock>
        </Layout>
      )
    )
  }
}

export default IndexPage
