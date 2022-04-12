import { useContext } from 'react';
// eslint-disable-next-line no-unused-vars
import { useLocation, useHistory } from 'react-router-dom';
import { AuthContext } from '../context';

const useRedirectIfNotLogged = (path) => {
  const auth = useContext(AuthContext);
  // console.log(auth.isLoggedIn);
  // const location = useLocation();
  // console.log(location.pathname);
  const redirect = useHistory();
  if (!auth.isLoggedIn) redirect.push(path);
};

export default useRedirectIfNotLogged;
