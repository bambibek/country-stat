// This hook is used to fetch one specific country

import { useState, useEffect } from "react";

const useCountry = (name) => {
  const [singleCountry, setSingleCountry] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSingleCountry = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}?fullText=true`
        );
        const data = await response.json();
        setSingleCountry(data[0]);
      } catch (error) {
        setError(error);
      }
    };
    fetchSingleCountry();
  }, [name]);
  return [singleCountry, error];
};
export default useCountry;
