import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import 'typeface-roboto';
import styled from 'styled-components';
import { withTheme } from '@material-ui/core/styles';
import ConfigurableCodeBlock from '../components/ConfigurableCodeBlock';

const Header = withTheme()(styled.h1`
  font-size: 1.7rem;
  padding: 30px 12px 20px 12px;
  margin: 0;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.secondary.contrastText};
`);

const Wrapper = withTheme()(styled.div`
  background-color: ${({ theme }) => theme.palette.secondary.dark};
`);

const Topic = ({ children }) => (
  <Wrapper>
    <Header>{children}</Header>
  </Wrapper>
);

const GuidesPage = () => (
  <Layout>
    <SEO title="Guides" />
    <Topic>Money Calculation and Manipulation</Topic>
    <ConfigurableCodeBlock>
      {`
        import { Money } from 'wealth';
        import { add, subtract, multiply, divide } from 'wealth/fn';

        const price = Money.init('80.78', 'USD'); // $80.78
        const discountPercentage = 10; // 10% discount
        let discount = multiply(price, discountPercentage);
        discount = divide(discount, 100);
        const discountedPrice = subtract(price, discount); // $72.70
        const shipping = Money.init('15.50', 'USD'); // $15.50
        const total = add(price, shipping); // $88.20
      `}
    </ConfigurableCodeBlock>
    <Topic>Money Comparison</Topic>
    <ConfigurableCodeBlock>
      {`
        import { Money } from 'wealth';
        import { lessThan } from 'wealth/fn';

        const overdraft = Money.init('1000.00', 'GBP'); // $1000.00
        const debt = Money.init('9.00', 'GBP'); // $9.00
        const canBorrowMore = lessThan(debt, overdraft); // true
      `}
    </ConfigurableCodeBlock>
    <Topic>Money Allocation</Topic>
    <ConfigurableCodeBlock>
      {`
        import { Money } from 'wealth';
        import { allocate, allocateTo } from 'wealth/fn';

        // Allocation by ratios
        const inheritance = Money.init('5000000', 'EUR');
        const ratios = [63, 22, 15]; // ratios
        const inheritedShares = allocate(inheritance, ratios);
        // Equal Allocation
        const expenses = Money.init('79595', 'EUR');
        const expenseShares = allocateTo(expenses, 10); // Equal (or nearly equal) shares of expenses
      `}
    </ConfigurableCodeBlock>
    <Topic>Currency</Topic>
    <ConfigurableCodeBlock>
      {`

      `}
    </ConfigurableCodeBlock>
    <Topic>Formatting and Parsing</Topic>
    <ConfigurableCodeBlock>
      {`

      `}
    </ConfigurableCodeBlock>
    <Topic>Serialization</Topic>
    <ConfigurableCodeBlock>
      {`
        import { Money } from 'wealth';

        const money = Money.init('1.00', 'USD');
        money.toJSON(); // {amount: '1.00', currency: 'USD'}
        JSON.stringify(money); // {amount: '1.00', currency: 'USD'}
      `}
    </ConfigurableCodeBlock>
    <Topic>Error Handling</Topic>
    <ConfigurableCodeBlock>
      {`
        import {
          WealthError,
          CurrencyMismatchError,
          InvalidCurrencyError,
          WrongInputError
        } from 'wealth/errors';

        try {
          // operations
        }
        catch(e) {
          if(e instanceof CurrencyMismatchError) {
            // Thrown when the two sides of the operation use different currencies
          }
          else if(e instanceof InvalidCurrencyError) {
            // Thrown when invalid or missing currency code provided
          }
          else if(e instanceof WrongInputError) {
            // Thrown when bad input is provided to various methods
          }

          if(e instanceof WealthError) {
            // All custom errors produced by Wealth inherit "WealthError"
          }
          else {
            // All other errors
          }
        }
      `}
    </ConfigurableCodeBlock>
  </Layout>
);

export default GuidesPage;
