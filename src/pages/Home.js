import React, { useState } from "react";
import DropdownSort from "../components/DropdownSort";
import Header from "../pages/Header";
import CountryTable from "../components/table/CountryTable";
import Search from "../components/Search";
//import { useSelector } from "react-redux";

function Home() {
  //const favouriteCountries = useSelector((state) => state.favouriteCountries);
  const [userValue, setUserValue] = useState("");

  //getting search value from the child
  function searchVal(inputValue) {
    // setUserValue(inputValue);
    setUserValue(inputValue);
  }
  //   function sortValue(sortVal) {
  //     setSortVal(sortVal);
  //   }

  //   function favouriteVal(favVal) {
  //     // setFavVal(favVal);
  //     setFavCount(!favVal && favCount > 0 ? favCount - 1 : favCount + 1);
  //   }
  //   function favBtnClick(favClickVal) {
  //     // console.log("home fav click value =>", favClickVal);
  //     setFavClick(favClickVal);
  //   }

  return (
    <div>
      <Header />
      <Search captureValue={searchVal} />
      <DropdownSort />
      <CountryTable
        userSearchValue={userValue}
        // sortOption={sortVal}
        // captureFavValue={favouriteVal}
        // favouriteClick={favClick}
      />
    </div>
  );
}

export default Home;
