import {
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
  ALL_COUNTRIES,
  SORTING,
  FAVOURITE_LIST,
  INITIAL_COUNTRIES,
  BACK_TO_HOME,
  ADD_OR_REMOVE_FAV,
  COUNT_FAVOURITE,
} from "./action";

const initialState = {
  favouriteCountries: [],
  allCountries: [],
  initialCountries: [],
  currentPage: "Home",
  countFav: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE:
      const countryName = action.payload;

      return {
        ...state,
        favouriteCountries: [...state.favouriteCountries, countryName],
      };

    case REMOVE_FAVOURITE:
      const removeCountry = action.payload;
      const newList = state.favouriteCountries.filter(
        (name) => name !== removeCountry
      );
      return {
        ...state,
        favouriteCountries: newList,
      };

    case ALL_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload,
      };
    case ADD_OR_REMOVE_FAV:
      let country = action.payload;
      let favCountries = [...state.favouriteCountries];
      // toogle fav for selected country
      let currentCountries = state.allCountries.map((c) => {
        if (country.name.common === c.name.common) {
          c.isFav = country.isFav;
        }
        return c;
      });
      //if current country is selected as favourite then add that country to favouriteCountries
      if (country.isFav) {
        favCountries.push(country);
      } else {
        favCountries = favCountries.filter((c) => c.isFav);
      }
      //if page is FavPage then remove not Favourite country from the list
      if (state.currentPage === "FavPage") {
        currentCountries = currentCountries.filter((c) => c.isFav);
      }
      return {
        ...state,
        allCountries: currentCountries,
        favouriteCountries: favCountries,
        countFav: favCountries.length,
      };
    case INITIAL_COUNTRIES:
      return {
        ...state,
        initialAllCountries: action.payload,
      };

    case SORTING:
      return {
        ...state,
        allCountries: action.payload,
      };
    case BACK_TO_HOME:
      return {
        ...state,
        allCountries: [...state.initialCountries],
        currentPage: action.payload,
      };

    case FAVOURITE_LIST:
      if (state.currentPage === action.payload) {
        return state;
      }
      return {
        ...state,
        initialCountries: [...state.allCountries],
        allCountries: [...state.favouriteCountries],
        currentPage: action.payload,
      };
    case COUNT_FAVOURITE:
      return {
        ...state,
        countFav: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
