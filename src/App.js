import {useState, useEffect} from "react";

import logo from './logo.svg';
import './App.css';

import Login from "./components/Login";
import ClockComponent from "./components/Clock";
import Gallery from "./components/Gallery";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [stateAuth, setStateAuth] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);


  useEffect(() => {
    const userLogged = localStorage.getItem("user-login")
    if (userLogged) {
      setStateAuth(true)
    }else{
      setStateAuth(false)
    }
  });


  if (stateAuth) {
    return(
        <div className="App">
          <WelcomeMessage modalOpen={modalOpen} setModelOpen={setModalOpen} />
          <ClockComponent/>
          <br/>
          <Gallery/>
        </div>

    )
  }else{
    return (
        <div className="App">
          <Login login={setStateAuth} setModalOpen={setModalOpen}/>
        </div>
    )
  }
}

export default App;
