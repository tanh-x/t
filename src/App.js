import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Overlay from "./components/Overlay";
import MainContent from "./components/MainContent";
import {DataAccessService} from "./Backend/DataAccessService";
import {useEffect} from "react";
import User from "./Backend/User";

function App() {
  const [loc, setLoc] = useState(null);
  const toggleLocation = (newLocation) => {
    setLoc(loc == newLocation ? null : newLocation);
    console.log(loc);
  }

  useEffect(() => {
      let someone = new User("This", "Diana", "eating", 40);
      DataAccessService.RemoveSeat(someone);
    // (async () => {
    //     let out = await DataAccessService.GetTables()
    //     out.forEach((doc) => {
    //         console.log(doc.id, " => ", doc.data())
    //     })
    // })()
  }, [])

  return (
    <div className="App" data-bs-theme="dark">
      <Overlay toggleLocation={toggleLocation} loc={loc}/>
      <MainContent loc={loc}/>
    </div>
  );

}

export default App;
