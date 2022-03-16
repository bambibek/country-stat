import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { useSelector } from "react-redux";
import "./table.css";

function CountryTable(props) {
  //console.log("table componenet props : ", props);
  //const [favVal, setFavVal] = useState(false);
  const state = useSelector((state) => state);
  function favouriteVal(favValue) {
    //setFavVal(favVal);
    props.captureFavValue(favValue);
  }
  //console.log(props);
  return (
    <div className="tblBody">
      {state.allCountries.length <= 0 && (
        <h1>No Favourite countries available.</h1>
      )}

      <table>
        <TableHead />
        <TableBody
          searchValue={props.userSearchValue}
          sortValue={props.sortOption}
          favValue={favouriteVal}
          favClickVal={props.favouriteClick}
        />
      </table>
    </div>
  );
}
export default CountryTable;
