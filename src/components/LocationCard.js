import "./LocationCard.css";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function LocationCard(props) {
  return (
    <Card onClick={() => {
      props.toggleLocation(props.name);
    }} id="card-body" style={{ width: "95%", backgroundColor: "transparent", border: "none", margin: "auto" }}>
      <Card.Body>
        <Card.Title>
          <span className="location-name">{props.name}</span>
        </Card.Title>
        <div>
          <div class="number">{props.numPeople}</div>
          <div class="div-image">
            <img id="image" src="/people-icon.png" />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default LocationCard;
