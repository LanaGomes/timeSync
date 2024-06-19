import { useState } from "react";

import "./App.css";

import MainMessage from "./components/MainMessage";
import StopWatch from "./components/StopWatch";
import StopWatchLogics from "./components/StopWatchLogics";

function App() {
  return (
    <div className="bg-reallywhite  ">
      <StopWatchLogics />

      <div className=""></div>
    </div>
  );
}

export default App;
