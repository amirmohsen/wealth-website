import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';

const Navigation = () => (
  <>
    <Hidden smDown>
      <DesktopNavigation />
    </Hidden>
    <Hidden mdUp>
      <MobileNavigation />
    </Hidden>
  </>
);

export default Navigation;
