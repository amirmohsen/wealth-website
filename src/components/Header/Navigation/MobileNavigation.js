import React, { Component } from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import MenuInnerIcon from '@material-ui/icons/Menu'
import HelpIcon from '@material-ui/icons/Help'
import IconButton from '@material-ui/core/IconButton'
import { Link } from 'gatsby'
import styled from 'styled-components'

const MenuIcon = styled(MenuInnerIcon)`
  color: white;
`

const MenuLink = styled(Link)`
  &,
  &:focus {
    color: black;
    text-decoration: none;
  }
`

const Wrapper = styled.div`
  width: 300px;
`

export default class MobileNavigation extends Component {
  state = {
    open: false,
  }

  handleDrawer = open => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    this.setState({ open })
  }

  render() {
    const { open } = this.state

    return (
      <>
        <IconButton onClick={this.handleDrawer(true)}>
          <MenuIcon fontSize="large" />
        </IconButton>
        <SwipeableDrawer
          anchor="right"
          open={open}
          onClose={this.handleDrawer(false)}
          onOpen={this.handleDrawer(true)}
        >
          <Wrapper
            role="presentation"
            onClick={this.handleDrawer(false)}
            onKeyDown={this.handleDrawer(false)}
          >
            <List>
              <ListItem
                to="/getting-started"
                component={MenuLink}
                key="getting-started"
              >
                <ListItemIcon>
                  <PlayArrowIcon />
                </ListItemIcon>
                <ListItemText primary="Getting Started" />
              </ListItem>
              <Divider />
              <ListItem to="/guides" component={MenuLink} key="guides">
                <ListItemIcon>
                  <HelpIcon />
                </ListItemIcon>
                <ListItemText primary="Guides" />
              </ListItem>
            </List>
            {/* <MenuItem onClick={this.handleClose}>
                <MenuLink to="/reference">
                  API Reference
                </MenuLink>
              </MenuItem> */}
            {/* </MenuList> */}
          </Wrapper>
        </SwipeableDrawer>
      </>
    )
  }
}
