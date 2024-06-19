import MainMessage from "./MainMessage";
import StopWatch from "./StopWatch";
import Buttons from "./Buttons";
import { useState, useEffect } from "react";

function StopWatchLogics({}) {
  //store my time
  const [time, setTime] = useState(0);

  //time is running?
  const [itsRunning, setItsRunning] = useState(false);

  //mode
  let [mode, setMode] = useState(null);

  //dealing with negative time
  const absolutetime = Math.abs(time);
  const sign = time < 0 ? "-" : " ";

  // Hours calculation
  const hours = Math.floor(absolutetime / 360000);

  // Minutes calculation
  const minutes = Math.floor((absolutetime % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((absolutetime % 6000) / 100);

  //set interval to count the seconds function
  useEffect(() => {
    let myInterval;

    if (itsRunning) {
      myInterval = setInterval(() => {
        setTime((prevTime) => {
          const newTime = prevTime + (mode === "focus" ? 1 : -1);
          return newTime;
        });
      }, 10);
    }

    return () => clearInterval(myInterval);
  }, [itsRunning, mode]);

  let focusTimeClickHandler = () => {
    if (mode === "focus") {
      setItsRunning(!itsRunning);
    } else {
      setMode("focus");
      setItsRunning(true);
    }
  };

  const restTimeClickHandler = () => {
    if (mode === "rest") {
      setItsRunning(!itsRunning);
    } else {
      setMode("rest");
      setItsRunning(true);
    }
  };

  return (
    <>
      <MainMessage mode={mode} />
      <StopWatch
        mode={mode}
        sign={sign}
        minutes={minutes}
        seconds={seconds}
        hours={hours}
      />
      <Buttons
        restTimeClickHandler={restTimeClickHandler}
        focusTimeClickHandler={focusTimeClickHandler}
        mode={mode}
        itsRunning={itsRunning}
      />
    </>
  );
}
export default StopWatchLogics;
