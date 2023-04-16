import logo from "./logo.svg";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap-dark/dist/js/darkmode.min.js';
// import "bootstrap-dark-5@1.1.3/dist/css/bootstrap-dark.min.css";

import "bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import { useState } from "react";
import Overlay from "./components/Overlay";
import MainContent from "./components/MainContent";

function App() {
  const [loc, setLoc] = useState(null);
  const toggleLocation = (newLocation) => {
    setLoc(loc == newLocation ? null : newLocation);
    console.log(loc);
  }

  return (
    <div className="App" data-bs-theme="dark">
      <Overlay toggleLocation={toggleLocation} loc={loc}/>
      <MainContent loc={loc}/>
    </div>
  );
}

export default App;
