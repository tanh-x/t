import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import Overlay from "./components/Overlay";
import Underlay from "./components/Underlay";

function App() {
  const [selectedLocation, changeLocation] = useState(null);

  const toggleMapView = (location) => {
    changeLocation(selectedLocation ? null : location);
    console.log(location);
  }

  return (
    <div className="App">
      <Underlay location={selectedLocation} />
      <Overlay changeLocation={toggleMapView} />
    </div>
  );
}

export default App;
