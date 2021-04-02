import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#01baef',
      light: '#67ecff',
      dark: '#008abc',
    },
    secondary: {
      light: '#65f384',
      main: '#008d27',
      dark: '#008d27'
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;