import { createMuiTheme } from '@material-ui/core/styles';
import { Theme } from './theme.vm';
import teal from '@material-ui/core/colors/teal';
import orange from '@material-ui/core/colors/orange';
import green from '@material-ui/core/colors/green';
import cyan from '@material-ui/core/colors/cyan';
import lime from '@material-ui/core/colors/lime';
import purple from '@material-ui/core/colors/purple';

const defaultTheme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
          height: '100%',
        },
        body: {
          height: '100%',
        },
      },
    },
  },
  palette: {
    primary: {
      main: teal[500],
    },
    secondary: {
      main: lime[500],
    },
    success: {
      main: green[500],
    },
    info: {
      main: cyan[500],
    },
    warning: {
      main: orange[500],
    },
  },
});

export const theme: Theme = defaultTheme;
