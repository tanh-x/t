import "../App.css";
import './Overlay.css'
import Button from "react-bootstrap/Button";
import LocationCards from "./LocationCard";

const Overlay = (props) => {
  return (
    <div className="overlay">
      <div className = "sidebar" style = {{ width: '350px' }}>
        <LocationCards name = {"UDCC"} numPeople = {100} />
       <LocationCards name = {"Friley Windows"} numPeople = {20} /> 
       <LocationCards name = {"Parks Library"} numPeople = {50} />
      </div>
    </div>
  );
};

export default Overlay;
