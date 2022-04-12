import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import App from './App';

axios.defaults.baseURL =
  process.env.NODE_ENV !== 'production'
    ? process.env.REACT_APP_AXIOS_BASE_URL_DEV
    : process.env.REACT_APP_AXIOS_BASE_URL_PROD;
// console.log(process.env.REACT_APP_AXIOS_BASE_URL_DEV);

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById('root')
);
