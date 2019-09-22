import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import styled from 'styled-components'
import ghIcon from './gh-icon.png'

const GitHubIcon = styled.img.attrs({
  src: ghIcon,
  alt: 'Github Icon',
})`
  display: block;
  width: 30px;
  height: 30px;
`

const GitHubLink = () => (
  <IconButton
    aria-label="Wealth GitHub Link"
    component="a"
    target="_blank"
    href="https://github.com/amirmohsen/wealth"
  >
    <GitHubIcon />
  </IconButton>
)

export default GitHubLink
