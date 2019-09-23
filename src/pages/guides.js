import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import 'typeface-roboto'
import styled from 'styled-components'
import { withTheme } from '@material-ui/core/styles'
import ConfigurableCodeBlock from '../components/ConfigurableCodeBlock'
import DarkWrapper from '../components/DarkWrapper'

const Header = withTheme()(styled.h1`
  font-size: 1.7rem;
  padding: 30px 12px 20px 12px;
  margin: 0;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.secondary.contrastText};
`)

const Topic = ({ children }) => (
  <DarkWrapper>
    <Header>{children}</Header>
  </DarkWrapper>
)

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
        const inheritance = Money.init('5000.00', 'EUR');
        const ratios = [63, 22, 15]; // ratios
        const inheritedShares = allocate(inheritance, ratios);
        // Equal Allocation
        const expenses = Money.init('795.95', 'EUR');
        const expenseShares = allocateTo(expenses, 10); // Equal (or nearly equal) shares of expenses
      `}
    </ConfigurableCodeBlock>
    <Topic>Currency</Topic>
    <ConfigurableCodeBlock>
      {`
        import { Money, Currency } from 'wealth';
        import {
          registerCurrency
        } from 'wealth/store';
        import {
          GBP
        } from 'wealth/iso';

        registerCurrency(GBP);

        registerCurrency({
          code: 'XBT',
          symbol: 'Ƀ'
        });

        const gbpCurrencyInstance = Currency.init('GBP');
        const moneyA = Money.init('900.00', gbpCurrencyInstance);
        const moneyB = Money.init('900.00', 'GBP');
        const moneyC = Money.init('900.00', 'XBT');
      `}
    </ConfigurableCodeBlock>
    <Topic>Formatting and Parsing</Topic>
    <ConfigurableCodeBlock>
      {`
        import { Money } from 'wealth';
        import { registerCurrency } from 'wealth/store';
        import { USD } from 'wealth/iso';
        import { format } from 'wealth/fn';

        registerCurrency(USD);

        const money = Money.init('5000.00', 'USD');
        format(money) === '$5,000.00'
        format(money, {
          pattern: '%ns%s%v',
          thousandsSeparator: ',',
          decimalSeparator: '.'
        }) === '5 000,00 $'
      `}
    </ConfigurableCodeBlock>
    <Topic>Serialization</Topic>
    <ConfigurableCodeBlock>
      {`
        import { Money } from 'wealth';

        const money = Money.init('1.00', 'USD');
        JSON.stringify(money) === '{ "amount": "1.00", "currency": "USD" }'
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
          console.log('Some Wealth operations');
        }
        catch(e) {
          if(e instanceof CurrencyMismatchError) {
            console.log('Thrown when the two sides of the operation use different currencies');
          }
          else if(e instanceof InvalidCurrencyError) {
            console.log('Thrown when invalid or missing currency code provided');
          }
          else if(e instanceof WrongInputError) {
            console.log('Thrown when bad input is provided to various methods');
          }

          if(e instanceof WealthError) {
            console.log('All custom errors produced by Wealth inherit "WealthError"');
          }
          else {
            console.log('All other errors');
          }
        }
      `}
    </ConfigurableCodeBlock>
  </Layout>
)

export default GuidesPage
