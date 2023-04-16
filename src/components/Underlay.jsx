import "../App.css";
// import TableView from "./TableView";
import TableView from "./TableView/TableView";

const Underlay = (props) => {
  return <div className="underlay">{props.location == null ? "map view" : <TableView location={props.location} />}</div>;
};

export default Underlay;
