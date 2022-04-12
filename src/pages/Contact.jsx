import React from 'react';
import { Link } from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';

// import { AppSettingsContext } from '../context';

const Contact = () => {
  const greeting = 'Hello Contact Component!';
  // const appContext = useContext(AppSettingsContext);
  // console.log(appContext);
  return (
    <MainTemplate>
      <div>
        {greeting}
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </div>
    </MainTemplate>
  );
};

export default Contact;
