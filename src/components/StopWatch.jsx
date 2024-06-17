import { useEffect } from "react";
import { useState } from "react";
import Buttons from "./Buttons";

function StopWatch() {
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

  let restTimeClickHandler = () => {
    if (mode === "rest") {
      setItsRunning(!itsRunning);
    } else {
      setMode("rest");
      setItsRunning(true);
    }
  };

  const getClassName = () => {
    if (mode === "rest") {
      return "flex flex-col justify-center items-center bg-circleBlue bg-cover bg-no-repeat bg-center h-60 w-60 my-10 sm:h-80 sm:w-80 sm:my-4  static z-1 drop-shadow-md>";
    } else if (mode === "focus") {
      return "flex flex-col justify-center items-center bg-circleRed bg-cover bg-no-repeat bg-center h-60 w-60 my-10 sm:h-80 sm:w-80 sm:my-4  static z-1 drop-shadow-md>";
    } else {
      return "flex flex-col justify-center items-center bg-circlePurple bg-cover bg-no-repeat bg-center h-60 w-60 my-10 sm:h-80 sm:w-80 sm:my-4  static z-1 drop-shadow-md>";
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className={getClassName()}>
        <h1 className="bg-gradient-to-r from-white via-grey-1 to-white text-4xl sm:text-6xl py-8 px-24 sm:px-28  rounded-full relative  z-10 drop-shadow-md ">
          {`${sign}${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`}
        </h1>
      </div>
      <Buttons
        restTimeClickHandler={restTimeClickHandler}
        focusTimeClickHandler={focusTimeClickHandler}
        mode={mode}
        itsRunning={itsRunning}
      />
    </div>
  );
}

export default StopWatch;
