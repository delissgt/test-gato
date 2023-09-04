import React, {useEffect, useState} from "react";

import Clock from "react-clock";
import "react-clock/dist/Clock.css"

const ClockComponent = () => {
  const [clockDate, setClockDate] = useState(new Date());


  useEffect(() => {
    const interval = setInterval(() => setClockDate(new Date()), 1000);

    console.log("c", clockDate)

    return () => {
      clearInterval(interval);
    }
  }, []);


  return (
      <div>
        <p>Current time:</p>
        <Clock value={clockDate} className="react-clock"/>
      </div>
  )
}


export default ClockComponent