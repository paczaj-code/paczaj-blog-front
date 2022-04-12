import React from 'react';
import { Link } from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';

const Home = () => {
  const greeting = 'Hello Function Component!';

  return (
    <MainTemplate>
      {greeting}
      <br />
      <nav>
        <Link to="category/ddd">Category</Link>
      </nav>
    </MainTemplate>
  );
};

export default Home;
