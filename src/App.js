import logo from './logo.svg';
import './App.css';

import Overlay from "./components/Overlay";
import Underlay from './components/MainContent';

function App() {
  return (
    <div className="App">
      <Overlay />
      <Underlay />
    </div>
  );
}

export default App;
