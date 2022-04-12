import { useState, useCallback } from 'react';
import axios from 'axios';

export const useHttp = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [responseStatus, setResponseStatus] = useState(null);
  const [responseCode, setResponseCode] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    axios({
      method: requestConfig.method,
      url: requestConfig.url,
      data: requestConfig.body ? requestConfig.body : null
    })
      .then((response) => {
        // console.log(response);
        applyData(response.data);
        setResponseStatus(response.statusText);
        setResponseCode(response.status);
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      })
      .finally(() => {});
    // try {
    //   const response = await fetch(requestConfig.url, {
    //     method: requestConfig.method ? requestConfig.method : 'GET',
    //     header: requestConfig.headers ? requestConfig.headers : {},
    //     body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
    //   });

    //   if (!response.ok) {
    //     throw new Error('Request failed dupa!');
    //   }

    //   const data = await response.json();
    //   applyData(data);
    // } catch (err) {
    //   setError(err.message || 'Something went wrong!');
    // }
    // setIsLoading(false);
  }, []);

  return { isLoading, error, sendRequest, responseStatus, responseCode };
};
