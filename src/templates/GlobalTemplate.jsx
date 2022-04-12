/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import ThemeMixer from '../themes/ThemeMixer';
import { AppSettingsContext } from '../context';
import GlobalStyle from '../themes/GlobalStyle';
import useAppSettings from '../hooks/useAppSettings';
import useHttp from '../hooks/useHttp';

const GlobalTemplate = ({ children }) => {
  const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
  const initTheme = darkThemeMq.matches === true ? 'dark' : 'light';
  const pageInitSettings = {
    appTheme: initTheme,
    isAdminPage: false
  };

  const { responseData } = useHttp(true, {
    method: 'get',
    url: '/get-categories',
    body: null
  });
  const { appTheme, appThemeHandler, isMobile, isAdminPage } = useAppSettings(pageInitSettings);

  const theme = ThemeMixer(appTheme, pageInitSettings);

  const appSettingsValues = {
    appTheme,
    appThemeHandler,
    isMobile,
    isAdminPage,
    menuItems: responseData
  };
  return (
    <div>
      <AppSettingsContext.Provider value={appSettingsValues}>
        <ThemeProvider theme={theme}>
          <GlobalStyle appTheme={appTheme} />
          {children}
        </ThemeProvider>
      </AppSettingsContext.Provider>
    </div>
  );
};

GlobalTemplate.propTypes = {
  children: PropTypes.node.isRequired
};

export default GlobalTemplate;
