import logo from './logo.svg';
import './App.css';

import Overlay from "./components/Overlay";
import Underlay from './components/MainContent';
import LocationCards from "./components/LocationCard";

function App() {
  return (
    <div className="App">
      {/* <Overlay />
      <Underlay /> */}
      <LocationCards name = {"Union Drive Community Center"} />
      <LocationCards name = {"Friley Windows"} /> 
    </div>
  );
}

export default App;
