import "../App.css";
import TableModal from "./TableView/TableModal";
import { useState } from "react";

const Underlay = (props) => {
  const [show,setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return <div className="underlay">
       <button onClick={()=>{setShow(true); console.log(show)}}>test</button>
       <TableModal show={show} handleShow = {handleShow} handleClose = {handleClose}>
      
       </TableModal>
  </div>;
};

export default Underlay;
