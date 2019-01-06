import { createMuiTheme } from '@material-ui/core/styles';
import extend from 'extend';
import constants from './constants.json';

const theme = createMuiTheme(extend(true, {}, {
  typography: {
    useNextVariants: true,
  },
}, constants));

export default theme;
