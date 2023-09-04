import {useState, useEffect} from "react";

import logo from './logo.svg';
import './App.css';

import Login from "./components/Login";

function App() {
  const [stateAuth, setStateAuth] = useState(false);



  if (stateAuth) {
    return(
        <div>
          imagenes pets
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
