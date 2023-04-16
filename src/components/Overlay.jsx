import "../App.css";
import './Overlay.css'
import Sidebar from "./Sidebar/Sidebar";
import TableModal from "./TableView/TableModal"

const Overlay = (props) => {

  return (
    <div className="overlay">
      <Sidebar />
      <div className="table-view">
        <button >ummm</button>
        <TableModal show={true}></TableModal>
        khkdashkdsaldss
      </div>
    </div>
  );
};

export default Overlay;
