import "../App.css";
import './Overlay.css'
import { useState } from "react"
import Button from "react-bootstrap/Button";
import LocationCards from "./LocationCard";


const halls = {
  "UDCC": {
    numPeople: 100,
  },

  "Friley Windows": {
    numPeople: 50,
  },

  "Campameal": {
    numPeople: 20,
  },

  "Parks Library": {
    numPeople: 70,
  },
}

const Overlay = (props) => {
  return (
    <div className="overlay">
      <div className="sidebar">
        {Object.entries(halls).map(([k, v], i) =>
          <LocationCards toggleLocation={props.toggleLocation} name={k} numPeople={v.numPeople} />
        )}
      </div>
    </div>
  );
};

export default Overlay;
