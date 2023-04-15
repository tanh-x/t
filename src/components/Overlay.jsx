import "../App.css";
import './Overlay.css'
import Button from "react-bootstrap/Button";
import LocationCards from "./LocationCard";

const Overlay = (props) => {
  return (
    <div className="overlay">
      <div className = "sidebar">
        <LocationCards name = {"UDCC"} numPeople = {100} />
       <LocationCards name = {"Friley Windows"} numPeople = {20} /> 
       <LocationCards name = {"Parks Library"} numPeople = {50} />

        <Button variant="primary" onClick={() => {
          props.changeLocation("something");
        }}>Toggle map/table view</Button>
      
      </div>
    </div>
  );
};

export default Overlay;
