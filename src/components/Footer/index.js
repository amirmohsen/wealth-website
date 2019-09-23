import React from 'react'
import styled from 'styled-components'
import { withTheme } from '@material-ui/core/styles'
import DarkWrapper from '../DarkWrapper'

const Copyright = withTheme()(styled.div`
  font-size: 0.8rem;
  padding: 30px 12px 20px 12px;
  margin: 0;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.secondary.contrastText};
`)

const Footer = () => (
  <DarkWrapper>
    <Copyright>
      Copyright © {new Date().getFullYear()} Amir Mohsen Abdolrazaghi
    </Copyright>
  </DarkWrapper>
)

export default Footer
