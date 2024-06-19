import MainMessage from "./MainMessage";
import StopWatch from "./StopWatch";
import Buttons from "./Buttons";
import { useState, useEffect } from "react";

function StopWatchLogics({}) {
  // Recuperar o tempo salvo no Local Storage
  const savedTime = localStorage.getItem("time")
    ? parseInt(localStorage.getItem("time"))
    : 0;
  const savedMode = localStorage.getItem("mode") || null;
  const savedItsRunning = localStorage.getItem("itsRunning") === "true";

  //store my time
  const [time, setTime] = useState(savedTime);

  //time is running?
  const [itsRunning, setItsRunning] = useState(savedItsRunning);

  //mode
  let [mode, setMode] = useState(savedMode);

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
          localStorage.setItem("time", newTime);
          return newTime;
        });
      }, 10);
    }

    return () => clearInterval(myInterval);
  }, [itsRunning, mode]);

  useEffect(() => {
    localStorage.setItem("mode", mode);
    localStorage.setItem("itsRunning", itsRunning);
  }, [mode, itsRunning]);

  let focusTimeClickHandler = () => {
    if (mode === "focus") {
      setItsRunning(!itsRunning);
    } else {
      setMode("focus");
      setItsRunning(true);
    }
  };

  useEffect(() => {
    document.title = `${sign}${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }, [time]);

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
      <MainMessage
        mode={mode}
        sign={sign}
        minutes={minutes}
        seconds={seconds}
        hours={hours}
        time={time}
      />
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
