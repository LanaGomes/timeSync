import { useState } from "react";

import "./App.css";

import MainMessage from "./components/MainMessage";
import StopWatch from "./components/StopWatch";

function App() {
  return (
    <div className="bg-reallywhite  ">
      <MainMessage />
      <StopWatch />

      <div className=""></div>
    </div>
  );
}

export default App;
