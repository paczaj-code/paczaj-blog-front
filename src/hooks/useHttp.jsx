import { useEffect, useState } from 'react';
import axios from 'axios';

const useHttp = (trigger, requestData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [responseStatus, setResponseStatus] = useState(null);
  const [responseCode, setResponseCode] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    axios({
      method: requestData.method,
      url: requestData.url,
      data: requestData.body ? requestData.body : null
    }).then((response) => {
      setIsLoading(false);
      setResponseData(response.data);
      setResponseStatus(response.statusText);
      setResponseCode(response.status);
    });
  }, [trigger]);
  return { isLoading, responseData, responseStatus, responseCode };
};

export default useHttp;
