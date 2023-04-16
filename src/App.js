import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-dark-5@1.1.3/dist/css/bootstrap-dark.min.css";
import { useState } from "react";
import Overlay from "./components/Overlay";
import MainContent from "./components/MainContent";
import {DataAccessService} from "./DataAccessService";
import {useEffect} from "react";

function App() {
  const [loc, setLoc] = useState(null);
  const toggleLocation = (newLocation) => { setLoc(loc == newLocation ? null : newLocation); }

  useEffect(() => {
    (async () => {
        let out = await DataAccessService.GetTables()
        out.forEach((doc) => {
            console.log(doc.id, " => ", doc.data())
        })
    })()
  }, [])

  return (
    <div className="App" data-bs-theme="dark">
      <Overlay toggleLocation={toggleLocation}/>
      <MainContent loc={loc}/>
    </div>
  );

}

export default App;
