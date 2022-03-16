import React from "react";
import { useDispatch } from "react-redux";

import { MdOutlineHome } from "react-icons/md";
import "./favourite.css";
import { backToHome } from "../redux/action";

function BackHome() {
  const dispatch = useDispatch();
  function handleClick(page) {
    console.log("Back Home clicked");
    dispatch(backToHome(page));
  }
  return (
    <div>
      <button className="navButtons" onClick={() => handleClick("Home")}>
        <MdOutlineHome size={30} />
      </button>
    </div>
  );
}

export default BackHome;
