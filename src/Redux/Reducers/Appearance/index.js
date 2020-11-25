/* eslint-disable */

import BlueGrey from '@material-ui/core/colors/blueGrey';
import Grey from '@material-ui/core/colors/grey';

const LOGOUT = 'LOGOUT';

const VazirFD = {
  fontFamily: 'Vazir',
  src: `url('../../../Assets/Fonts/Vazir/Farsi-Digits/Vazir-Black-FD.eot'),
    url('../../../Assets/Fonts/Vazir/Farsi-Digits/Vazir-Black-FD.eot?#iefix') format('embedded-opentype'),
    url('../../../Assets/Fonts/Vazir/Farsi-Digits/Vazir-Black-FD.woff2') format('woff2'),
    url('../../../Assets/Fonts/Vazir/Farsi-Digits/Vazir-Black-FD.woff') format('woff'),
    url('../../../Assets/Fonts/Vazir/Farsi-Digits/Vazir-Black-FD.') format('truetype');
  `,
  fontWeight: 'normal',
  fontStyle: 'normal',
};

const palette = {
  type: 'light',
  primary: {
    light: '#ccf34b',
    main: '#98c000',
    dark: '#659000',
    contrastText: '#000000',
  },
  secondary: {
    light: '#60fbce',
    main: '#0ac79d',
    dark: '#00956f',
    contrastText: '#000000',
  },
  background: {
    paper: Grey[50],
    default: Grey[100],
  },
  error: {
    main: '#f63f5b',
    contrastText: BlueGrey[900],
  },
  text: {
    primary: '#233451',
    secondary: '#90959e',
    disabled: '#b1b6bf',
    hint: '#989da6',
  },
};

const defaultThemingData = {
  typography: { useNextVariants: true },
  direction: 'rtl',
  palette: Object.assign({},
      palette,
    {
      type: 'dark',
      typography: {
        fontFamily: 'Vazir',
      },
      overrides: {
        MuiCssBaseline: {
          '@global': {
            '@font-face': [VazirFD],
          },
        },
      },
    }),
};

const defaultAppearanceData = {
  language: 'fa_IR',
  local: 'fa',
  nightMode: 'dark',
  themingData: defaultThemingData,
};

// eslint-disable-next-line import/prefer-default-export
export const appearanceReducer = (appearance = defaultAppearanceData, action) => {
  return appearance;
};
