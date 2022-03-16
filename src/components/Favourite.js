import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { MdFavorite } from "react-icons/md";
import "./favourite.css";
import { favouriteList } from "../redux/action";

function Favourite() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  function handleClick(page) {
    // dispatch(setCurrentPage(page));
    dispatch(favouriteList(page));
  }
  console.log("fav count : =>", state.countFav);
  return (
    <div>
      <button
        className="favButtons"
        onClick={() => handleClick("FavPage")}
        value="favBtn"
      >
        <span className="favCount">{state.countFav}</span>

        <MdFavorite size={30} />
      </button>
    </div>
  );
}

export default Favourite;
