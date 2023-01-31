import useCountries from "../../custom-hooks/useCountries";
// import { useState, useEffect } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addOrRemoveFav } from "../../redux/action";

const TableBody = (props) => {
  const { error } = useCountries();
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  let countrySearch = props.searchValue;

  function toMillion(population) {
    return (population / 1000000).toFixed(2) + "m";
  }
  //sorting
  function favBtn(country) {
    country.isFav = !country.isFav;
    dispatch(addOrRemoveFav(country));
    //dispatch(countFavourite(state.favouriteCountries.length));
  }

  
  return (
    <>
      <tbody>
        {error && <p>{error.message}</p>}

        {state.allCountries.length > 0 &&
          state.allCountries
            .filter((country) =>
              country.name.common
                .toLowerCase()
                .includes(countrySearch.toLowerCase())
            )
            .map((filterCountry) => {
              return (
                <tr className="tblContent" key={filterCountry.name.common}>
                  <td>
                    <img src={filterCountry.flags.png} alt="flag"></img>
                  </td>
                  <td>
                    <Link to={`./pages/${filterCountry.name.common}`}>
                      {filterCountry.name.common}
                    </Link>
                  </td>
                  <td>{filterCountry.region}</td>
                  <td>{filterCountry.capital}</td>
                  <td>{toMillion(filterCountry.population)}</td>
                  <td>
                    <button
                      className="favBtn"
                      onClick={() => favBtn(filterCountry)}
                    >
                      {filterCountry.isFav ? (
                        <FaHeart size={20} color="#888df7" />
                      ) : (
                        <FaRegHeart size={20} />
                      )}
                    </button>
                  </td>
                </tr>
              );
            })}
      </tbody>
    </>
  );
};

export default TableBody;
