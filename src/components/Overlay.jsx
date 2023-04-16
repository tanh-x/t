import "../App.css";
import './Overlay.css'
import Sidebar from "./Sidebar/Sidebar";
import TableView from "./TableView/TableView";

const Overlay = (props) => {
  return (
    <div className="overlay">
      <Sidebar toggleLocation={props.toggleLocation} />
      {props.loc == null ? <div className="dummy"><></></div> :
        <div className="table-view-wrapper">
          <TableView />
        </div>
      }
    </div>
  );
};

export default Overlay;
