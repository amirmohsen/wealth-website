import React, { Component } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import IconButton from '@material-ui/core/IconButton';
import MenuInnerIcon from '@material-ui/icons/Menu';
import { Link } from 'gatsby';
import styled from 'styled-components';

const MenuIcon = styled(MenuInnerIcon)`
  color: white;
`;

const MenuLink = styled(Link)`
  &,
  &:focus {
    color: black;
    text-decoration: none;
  }
`;

export default class MobileNavigation extends Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;

    return (
      <>
        <IconButton
          buttonRef={node => {
            this.anchorEl = node;
          }}
          aria-owns={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={this.handleToggle}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList>
                    <MenuItem onClick={this.handleClose}>
                      <MenuLink to="/getting-started">
                        Getting Started
                      </MenuLink>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                      <MenuLink to="/guides">
                        Guides
                      </MenuLink>
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                      <MenuLink to="/reference">
                        API Reference
                      </MenuLink>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </>
    );
  }
}
