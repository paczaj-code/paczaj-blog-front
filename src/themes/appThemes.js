import { darken, rgba } from 'polished';
import commonColors from './commonCollors';
import backgroundImages from './backgroundImages';

export const darkTheme = {
  globalBackgroundImage: backgroundImages.eggShell,
  globalBackgroundColor: rgba(0, 0, 12, 0.73),
  color: commonColors.grey200,
  primary: darken(0.1, commonColors.blue),
  secondary: darken(0.0, commonColors.orange),
  success: commonColors.green,
  info: commonColors.cyan,
  danger: commonColors.red,
  warning: commonColors.yellow,
  light: rgba(250, 250, 250, 0.93),
  dark: rgba(50, 50, 50, 0.93),
  themeName: 'dark'
};

export const lightTheme = {
  globalBackgroundImage: backgroundImages.eggShell,
  globalBackgroundColor: rgba(225, 225, 240, 0.93),
  color: commonColors.grey700,
  primary: commonColors.cyan,
  secondary: darken(0, commonColors.orange),
  success: commonColors.green,
  info: commonColors.cyan,
  danger: commonColors.red,
  warning: commonColors.yellow,
  themeName: 'light',
  light: rgba(250, 250, 250, 0.93),
  dark: rgba(50, 50, 50, 0.93)
};
