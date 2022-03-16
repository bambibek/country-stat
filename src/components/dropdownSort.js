import "./dropdownSort.css";
import { useDispatch, useSelector } from "react-redux";
import { sortCountries } from "../redux/action";

function DropdownSort(props) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  let sortType = "nameAcs";

  function handleOptionChange(event) {
    sortType = event.target.value;
    sortArray(sortType);
  }

  function sortArray() {
    const sortedCountries = [...state.allCountries].sort((a, b) =>
      sortCountriesBy(a, b, sortType)
    );
    console.log("State is updated!!");

    dispatch(sortCountries(sortedCountries));
  }

  function sortCountriesBy(a, b, countrySort) {
    if (countrySort.includes("name")) {
      if (countrySort === "nameAcs") {
        return b.name.common > a.name.common ? -1 : 0;
      } else {
        return b.name.common < a.name.common ? -1 : 0;
      }
    }
    if (countrySort.includes("cap")) {
      if (countrySort === "capAcs") {
        return b.capital > a.capital ? -1 : 0;
      } else {
        return b.capital < a.capital ? -1 : 0;
      }
    }
    if (countrySort.includes("pop")) {
      if (countrySort === "popAcs") {
        return b.population > a.population ? -1 : 0;
      } else {
        return b.population < a.population ? -1 : 0;
      }
    }
  }

  return (
    <>
      <div className="dropDown">
        <span>Sort by : </span>

        <select onChange={handleOptionChange}>
          <option>Sort By</option>
          <option value="nameAcs">Name (A - Z)</option>
          <option value="nameDcs">Name (Z - A)</option>
          <option value="capAcs">Capital (A - Z)</option>
          <option value="capDcs"> Capital (Z - A)</option>
          <option value="popAcs">Population (acs)</option>
          <option value="popDcs">Population (des)</option>
        </select>
      </div>
    </>
  );
}

export default DropdownSort;
