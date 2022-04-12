import React, { useContext } from 'react';
import styled from 'styled-components';
import Switcher from '../../atoms/Switcher/Switcher';
import { AppSettingsContext } from '../../../context';

const ThemeSwitcherWrapper = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  right: 50px;
  top: 15px;
  z-index: 100000;
`;

const IconLight = styled.i`
  color: ${({ theme }) => (theme.themeName === 'dark' ? '#f2c43d' : '#f17c37')};
`;

const IconDark = styled.i`
  color: ${({ theme }) => (theme.themeName === 'dark' ? '#555' : '#403f3f')};
`;

const ThemeSwither = () => {
  const appContext = useContext(AppSettingsContext);

  const { appTheme, appThemeHandler } = appContext;
  return (
    <ThemeSwitcherWrapper>
      <IconLight className="icon-wb_sunny icon-lg" />
      <Switcher
        notCheckedColor="light"
        switchColor="dark"
        defaultChecked={appTheme === 'dark'}
        onChange={appThemeHandler}
        value="theme"
        name="themeSwitch"
      />
      <IconDark className="icon-nights_stay icon-lg " />
    </ThemeSwitcherWrapper>
  );
};

export default ThemeSwither;
