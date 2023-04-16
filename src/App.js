import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "maplibre-gl/dist/maplibre-gl.css"
import {useEffect, useState} from "react";
import Overlay from "./components/Overlay";
import MainContent from "./components/MainContent";
import User from "./Backend/User";
import {DataAccessService} from "./Backend/DataAccessService";

function App() {
  const [loc, setLoc] = useState(null);
  const toggleLocation = (newLocation) => {
    setLoc(loc == newLocation ? null : newLocation);
    // console.log(loc);
  };

  return (
    <div className="App" data-bs-theme="dark">
      <Overlay toggleLocation={toggleLocation} loc={loc} />
      <MainContent loc={loc} />
    </div>
  );

}

export default App;
