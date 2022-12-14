import { createTheme } from '@mui/material';
import { Font } from '.././src/utils/enum';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1E213F',
      dark: '#5E9CA0',
    },
    secondary: {
      main: '#FFFFFF',
      light: '#EFF1FA',
    },
  },
  typography: {
    fontFamily: Font.Kumbh,
    h2: {
      fontSize: 28,
      color: '#161932',
    },
    h3: {
      color: '#161932',
      fontSize: 13,
      // letterSpacing: 5,
      textTransform: 'uppercase',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#4C9195',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          border: 0,
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});