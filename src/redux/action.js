export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const ALL_COUNTRIES = "ALL_COUNTRIES";
export const INITIAL_COUNTRIES = "INITIAL_COUNTRIES";
export const SORTING = "SORTING";
export const FAVOURITE_LIST = "FAVOURITE_LIST";
export const BACK_TO_HOME = "BACK_TO_HOME";
export const ADD_OR_REMOVE_FAV = "ADD_OR_REMOVE_FAV";
export const COUNT_FAVOURITE = "COUNT_FAVOURITE";

export const allCountries = (allCountries) => {
  return {
    type: ALL_COUNTRIES,
    payload: allCountries,
  };
};
export const initialCountries = (initialAllCountries) => {
  return {
    type: INITIAL_COUNTRIES,
    payload: initialAllCountries,
  };
};
export const removeFavourite = (countryName) => {
  return {
    type: REMOVE_FAVOURITE,
    payload: countryName,
  };
};
export const addFavourite = (countryName) => {
  return {
    type: ADD_FAVOURITE,
    payload: countryName,
  };
};
export const sortCountries = (sortedCountries) => {
  return {
    type: SORTING,
    payload: sortedCountries,
  };
};
export const favouriteList = (favouriteCountries) => {
  return {
    type: FAVOURITE_LIST,
    payload: favouriteCountries,
  };
};

export const backToHome = (backToHome) => {
  return {
    type: BACK_TO_HOME,
    payload: backToHome,
  };
};

export const addOrRemoveFav = (country) => {
  return {
    type: ADD_OR_REMOVE_FAV,
    payload: country,
  };
};
export const countFavourite = (count) => {
  return {
    type: COUNT_FAVOURITE,
    payload: count,
  };
};
