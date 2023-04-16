import "../App.css";
import './Overlay.css'
import { useState } from "react";

import Sidebar from "./Sidebar/Sidebar";
import TableView from "./TableView/TableView";
import TableModal from "./TableView/TableModal"

const Overlay = (props) => {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen(!open)
  }

  return (
    <div className="overlay">
      <Sidebar toggleLocation={props.toggleLocation} setOpen={setOpen} toggle={toggle} />

      <div className="table-view-wrapper">
        <TableView open={open}/>
      </div>

    </div>
  );
};

export default Overlay;
