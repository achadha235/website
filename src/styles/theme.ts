import { createMuiTheme } from '@material-ui/core/styles';
import tailwindConfig from '../../tailwind.config';

const fontFamily =
  'Inter, -apple-system, system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: tailwindConfig.theme.colors.indigo[300],
      main: tailwindConfig.theme.colors.indigo[500],
      dark: tailwindConfig.theme.colors.indigo[900],
      contrastText: tailwindConfig.theme.colors.white,
    },

    secondary: {
      light: tailwindConfig.theme.colors.teal[300],
      main: tailwindConfig.theme.colors.teal[500],
      dark: tailwindConfig.theme.colors.teal[900],
      contrastText: tailwindConfig.theme.colors.white,
    },
  },
  typography: {
    fontFamily,
    allVariants: {
      color: tailwindConfig.theme.colors.white,
    },
    h1: {
      fontWeight: 800,
      letterSpacing: -4,
    },
  },
  overrides: {
    /** 
    MuiTypography: {
      root: {
        color: tailwindConfig.theme.colors.gray[100],
      },
    },    
    */
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: tailwindConfig.theme.colors.black,
      },
    },
    MuiTab: {
      root: {
        outline: 'none !important',
      },
    },
    MuiButton: {
      text: {
        fontSize: '0.75rem',
      },
      label: {
        transform: 'translateX(1px)',
      },
      root: {
        cursor: 'pointer !important',
        outline: 'none !important',
        fontWeight: 600,
        letterSpacing: 1,
      },
    },

    MuiBadge: {
      anchorOriginTopRightRectangle: {
        fontWeight: 600,
        top: 8,
        right: 10,
      },
    },
  },
});

export default theme;
