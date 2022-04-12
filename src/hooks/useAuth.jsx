/* eslint-disable no-unused-vars */
import { useCallback, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const useAuth = () => {
  let logoutTimer;
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserID] = useState();
  const [userRoles, setUserRoles] = useState();
  const [userFirstName, setUserFirstName] = useState();
  const [userLastName, setUserLastName] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [token, setToken] = useState();
  const [tokenExpiration, setTokenExpiration] = useState();

  const login = useCallback(
    (logged, resUserId, roles, firstName, lastName, ResToken, ResTokenExpiration, avatar) => {
      setIsLoggedIn(logged);
      setUserID(resUserId);
      setUserRoles(roles);
      setUserFirstName(firstName);
      setUserLastName(lastName);
      setToken(ResToken);
      setTokenExpiration(ResTokenExpiration);
      setUserAvatar(avatar);
      localStorage.setItem(
        'userData',
        JSON.stringify({
          token: ResToken,
          UserId: resUserId,
          roles,
          firstName,
          lastName,
          tokenExpiration: ResTokenExpiration,
          avatar
        })
      );
    },
    []
  );

  const logout = () => {
    setIsLoggedIn(false);
    setUserID();
    setUserRoles();
    setUserFirstName();
    setUserLastName();
    setToken();
    setTokenExpiration();
    localStorage.removeItem('userData');
    // history.push('/administration');
  };
  useEffect(() => {
    if (token && tokenExpiration) {
      logoutTimer = tokenExpiration - new Date().getTime();
      setTimeout(logout, logoutTimer);
    }
    return clearTimeout(logoutTimer);
  }, [token, logout, tokenExpiration]);

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    if (storedUserData && storedUserData.token) {
      login(
        true,
        storedUserData.UserId,
        storedUserData.roles,
        storedUserData.firstName,
        storedUserData.lastName,
        storedUserData.token,
        storedUserData.tokenExpiration,
        storedUserData.avatar
      );
    }
  }, [login]);

  return {
    isLoggedIn,
    userId,
    userRoles,
    userFirstName,
    userLastName,
    token,
    tokenExpiration,
    login,
    logout,
    userAvatar
  };
};

export default useAuth;
