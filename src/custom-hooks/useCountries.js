// This hook is used to fetch all countries
import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allCountries, initialCountries } from "../redux/action";

const useCountries = () => {
  const state = useSelector((state) => state);
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const fetchAllCountries = useCallback(async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      //   console.log(response);
      if (!response.ok) {
        throw new Error("NO Data!!");
      }
      const data = await response.json();
      setCountries(data);
      dispatch(allCountries(data));
      dispatch(initialCountries(data));
    } catch (error) {
      setError(error);
    }
  }, [dispatch]);

  useEffect(() => {
    if (state.allCountries.length > 0 || state.currentPage === "FavPage")
      return;
    fetchAllCountries();
  }, [fetchAllCountries, state.allCountries.length, state.currentPage]);
  return { countries, error };
};
export default useCountries;
