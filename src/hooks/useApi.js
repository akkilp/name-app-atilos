/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useEffect, useState } from 'react';
import axios from 'axios';

const useApi = (url, mapResults = result => result) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    axios
      .get(url)
      .then(response => setData(mapResults(response.data)))
      .catch(setError)
      .finally(() =>
        setTimeout(function () {
          setIsLoading(false);
        }, 500),
      );
  }, [url]);

  return { data, isLoading, error };
};

export { useApi };
