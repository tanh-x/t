import "../App.css";
import TableView from "./TableView/TableView";
import MapView from "./MapView/MapView";

const Underlay = (props) => {
  return <div className="underlay">{props.location == null ? <MapView /> : <TableView location={props.location} />}</div>;
};

export default Underlay;
