import { darkTheme, lightTheme } from './appThemes';
import commonColors from './commonCollors';

const ThemeMixer = (appTheme, initSettings) => {
  let theme;
  switch (appTheme) {
    case 'dark': {
      theme = { ...commonColors, ...darkTheme };
      break;
    }

    case 'light': {
      theme = { ...commonColors, ...lightTheme };
      break;
    }
    default:
      theme = { ...commonColors, ...initSettings.appTheme };
  }

  return theme;
};

export default ThemeMixer;
