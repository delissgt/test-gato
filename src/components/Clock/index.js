import React, {useEffect, useState} from "react";

import Clock from "react-clock";
import "react-clock/dist/Clock.css"

const subtractHour = (date) => {
  date.setHours(date.getHours() -1);
  return date
}

const ClockComponent = () => {
  const [clockDate, setClockDate] = useState(subtractHour(new Date()));


  useEffect(() => {
    const interval = setInterval(() => setClockDate( subtractHour(new Date())), 1000);

    return () => {
      clearInterval(interval);
    }
  }, []);


  return (
      <div style={{ display: "inline-block", padding:"10px", paddingBottom: "10px"}}>
        <Clock value={clockDate} className="react-clock"/>
      </div>
  )
}


export default ClockComponent