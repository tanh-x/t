import "../App.css";
import Button from "react-bootstrap/Button";

const Overlay = (props) => {
  return (
    <div className="overlay">
      <div className="sidebar">
        <Button variant="primary" onClick={() => {
          props.changeLocation("something");
        }}>Toggle map/table view</Button>
      </div>
    </div>
  );
};

export default Overlay;
