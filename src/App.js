import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import CountryDetail from "./pages/CountryDetail.js";

function App() {
  return (
    <div>
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/:countryName" element={<CountryDetail />} />
      </Routes>
    </div>
  );
}

export default App;
