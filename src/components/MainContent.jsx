import "../App.css";

import { useState } from "react";
import MapView from "./MapView/MapView";
import TableView from "./TableView/TableView";

const MainContent = (props) => {
  return <div className="underlay">
    <MapView />
  </div>;
};

export default MainContent;
