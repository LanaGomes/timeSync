import { useState } from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import MainMessage from "./components/MainMessage";
import StopWatch from "./components/StopWatch";
import Buttons from "./components/Buttons";

function App() {
  return (
    <div className="bg-white  ">
      <NavBar />

      <div className="">
        <MainMessage />
        <StopWatch />
        <Buttons />
      </div>
    </div>
  );
}

export default App;
