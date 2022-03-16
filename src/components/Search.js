import { useState } from "react";

import { BsSearch } from "react-icons/bs";
import "./search.css";

function Search(props) {
  const [inputVal, setInputVal] = useState("");

  const handleInputChange = (event) => {
    //props.captureValue(val);
    setInputVal(event.target.value);
    props.captureValue(event.target.value);

    // console.log(event.target.value);
  };

  return (
    <div className="searchDiv">
      <button className="iconBtn">
        <BsSearch size={30} />
      </button>
      <input
        type={"text"}
        placeholder="Search by country or capital"
        className="searchInput"
        value={inputVal}
        onChange={handleInputChange}
      ></input>
    </div>
  );
}

export default Search;
