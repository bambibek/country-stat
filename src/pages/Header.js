import "./header.css";

import { MdSettingsSuggest } from "react-icons/md";

import Favourite from "../components/Favourite";
import BackHome from "../components/backHome";

function Header(props) {
  return (
    <div className="mainDiv">
      <div className="container">
        <nav>
          <BackHome />

          <Favourite />

          <button className="navButtons">
            <MdSettingsSuggest size={30} />
          </button>
        </nav>
      </div>
      <div className="flagifyDiv">
        <h1 className="h1content">GET TO KNOW YOUR COUNTRY</h1>
        <h2 className="h2content">Country data, made elegantly simple</h2>
        <div className="globe"></div>
      </div>
    </div>
  );
}
export default Header;
