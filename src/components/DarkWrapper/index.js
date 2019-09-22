import styled from 'styled-components'
import { withTheme } from '@material-ui/core/styles'

const DarkWrapper = withTheme()(styled.div`
  background-color: ${({ theme }) => theme.palette.secondary.dark};
`)

export default DarkWrapper
