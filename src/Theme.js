import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  typography: {
    fontFamily: 'Montserrat',
    h1: {
      fontFamily: 'Montserrat'
    }
  },
  palette: {
    primary: {
      main: '#fafafa',
      dark: '#8bd564'
    },
    secondary: {
      main: '#ff5000',
      dark: '#b23800'
    },
  },
});