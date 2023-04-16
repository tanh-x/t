import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {useEffect, useState} from "react";
import {initializeApp} from "firebase/app";
import Overlay from "./components/Overlay";
import Underlay from "./components/Underlay";
import StorageTest from "./components/StorageTest";

function App() {
    const [selectedLocation, changeLocation] = useState(null);
    const [firebaseApp, changeFirebaseApp] = useState(null);
    const firebaseConfig = {
        apiKey: "AIzaSyCfTzr1Bb6vQEDMAMLW6k1IxkS4NBO89Eg",
        authDomain: "sit-with-me-ab673.firebaseapp.com",
        projectId: "sit-with-me-ab673",
        storageBucket: "sit-with-me-ab673.appspot.com",
        messagingSenderId: "626380445969",
        appId: "1:626380445969:web:a9fc3c95c8ff41d51114b0"
    };
    changeFirebaseApp(initializeApp(firebaseConfig))

    // TODO: Add SDKs for Firebase products that you want to use
    useEffect(() => {

    }, [firebaseApp]);
    return (
        <div className="App">
            <StorageTest app={firebaseApp}/>
            <Overlay/>
            <Underlay/>
        </div>
    );
}

export default App;
