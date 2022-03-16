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

  return (
    <div>
      <Header />
      <Search captureValue={searchVal} />
      <DropdownSort />
      <CountryTable userSearchValue={userValue} />
    </div>
  );
}

export default Home;
