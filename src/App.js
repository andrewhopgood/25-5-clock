import React, { useState } from "react";
import "./App.css";
import CountdownTimer from "./components/CountdownTimer";
import SetTimerContainer from "./components/SetTimerContainer";
import Controls from "./components/Controls";

function App() {
  const [breakTimer, setBreakTimer] = useState(1);
  const [sessionTimer, setSessionTimer] = useState(1);

  return (
    <div className="App">
      <h1 id="header__title">25 + 5 Clock </h1>
      <SetTimerContainer
        breakTimer={breakTimer}
        setBreakTimer={setBreakTimer}
        sessionTimer={sessionTimer}
        setSessionTimer={setSessionTimer}
      />
      <CountdownTimer />
      <Controls />
    </div>
  );
}

export default App;
