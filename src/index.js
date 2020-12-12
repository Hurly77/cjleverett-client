import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#01baef',
      contrastText: '#fbfbff'
    },
    secondary: {main: '#0b4f6c'},
    text: {
      primary: '#fbfbff',
      secondary: '#fbfbff'
    }
  }
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />,
  </ThemeProvider>,
  document.getElementById('root')
);
