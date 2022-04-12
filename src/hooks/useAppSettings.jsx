import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useWindowSize from './useWindowSize';

const useAppSettings = (pageInitSettings) => {
  const storedValues = JSON.parse(localStorage.getItem('appSettings'));
  const [isAdminPage, setIsAdminPage] = useState(false);

  const location = useLocation();
  useEffect(() => {
    const regex = /administration/g;
    const found = location.pathname.match(regex);
    setIsAdminPage(Boolean(found));
  }, [location]);

  const [appTheme, setAppTheme] = useState(
    storedValues ? storedValues.appTheme : pageInitSettings.appTheme
  );
  const [isMobile, setIsMobile] = useState(false);
  const size = useWindowSize();
  useEffect(() => {
    setIsMobile(size.width <= 768);
  }, []);

  useEffect(() => {
    setIsMobile(size.width <= 768);
  }, [size]);

  const appThemeHandler = useCallback(
    (e) => {
      setAppTheme(e.target.checked ? 'dark' : 'light');
    },
    [appTheme]
  );

  return {
    appTheme,
    appThemeHandler,
    isMobile,
    isAdminPage
  };
};

export default useAppSettings;
