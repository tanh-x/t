import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Overlay from "./components/Overlay";
import MainContent from "./components/MainContent";

function App() {
  const [loc, setLoc] = useState(null);
  const toggleLocation = (newLocation) => { setLoc(loc == newLocation ? null : newLocation); }

  return (
    <div className="App">
      <Overlay toggleLocation={toggleLocation}/>
      <MainContent loc={loc}/>
    </div>
  );
}

export default App;
