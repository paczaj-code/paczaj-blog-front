import React from 'react';

export const AppSettingsContext = React.createContext({
  appTheme: 'dark',
  appThemeHandler: () => {},
  // appLanguage: 'pl',
  // langSwitcherHandler: () => {},
  // navPosition: 'menu-top',
  // navPositionHandler: () => {},
  isMobile: false,
  // rememberSettings: false,
  // rememberSettingsHandler: () => {},
  isAdminPage: false
});

export const AuthContext = React.createContext({
  isLoggedIn: false,
  userId: null,
  firstName: null,
  lastName: null,
  roles: null,
  token: null,
  avatar: null,
  login: () => {},
  logout: () => {}
});
