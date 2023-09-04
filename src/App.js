import {useState, useEffect} from "react";

import logo from './logo.svg';
import './App.css';

import Login from "./components/Login";
import ClockComponent from "./components/Clock";
import Gallery from "./components/Gallery";

function App() {
  // const [stateAuth, setStateAuth] = useState(false);
  const [stateAuth, setStateAuth] = useState(true);



  if (stateAuth) {
    return(
        <div className="App">
          <ClockComponent/>
          <br/>
          <Gallery/>
        </div>

    )
  }else{
    return (
        <div className="App">
          <Login login={setStateAuth} />
        </div>
    )
  }
}

export default App;
