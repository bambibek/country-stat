import React from "react";
import "./countryDetail.css";
import { useParams, Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useCountry from "../custom-hooks/useCountry";

function CountryDetail() {
  let { countryName } = useParams();

  const [country, error] = useCountry(countryName);

  if (error) {
    return <p>Something went wrong</p>;
  }
  if (!country) {
    return <p>Loading...</p>;
  }
  // console.log(country);
  return (
    <div className="countryContainer">
      <div>
        <div className=" imgContainer">
          <img
            alt="Country Flag"
            src={country.flags.svg}
            width={"400px"}
            height={"200px"}
          ></img>
        </div>
        <div className="accordion">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              Name
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{country.name.common}</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              Population
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{country.population}</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              Region
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{country.region}</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              Capital
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{country.capital}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <button className="backBtn">
          <Link className="linkStyle" to="/">
            Back to country list
          </Link>
        </button>
      </div>
    </div>
  );
}
export default CountryDetail;
