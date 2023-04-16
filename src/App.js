import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Overlay from "./components/Overlay";
import Underlay from "./components/Underlay";
import {DataAccessService} from "./DataAccessService";
import {useEffect} from "react";

function App() {
    // TODO: Add SDKs for Firebase products that you want to use
    useEffect( () => {
        let out = DataAccessService.GetTables().then(out => {
            out.forEach()
        })
        // out.forEach((doc) => {
        //     console.log(doc.id, " => ", doc.data());
        // })
        return () => {}
    })
    return (
        <div className="App">
            <Overlay/>
            <Underlay/>
        </div>
    );
}

export default App;
