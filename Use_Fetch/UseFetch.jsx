import { useEffect, useState } from "react";

const useFetch = (url, options = {}) => {
  //3 states
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    setPending(true);
    try {
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();
      setData(result);
      setError(null);
      setPending(false);
    } catch (event) {
      setError(`${event}. Some Error Ocurred.`);
      setPending(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);


  return {data, error, pending };
};

export default useFetch;
