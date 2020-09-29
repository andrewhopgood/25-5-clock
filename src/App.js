import React, { useState, useEffect } from "react";
import "./App.css";
import CountdownTimer from "./components/CountdownTimer";
import SetBreakTimer from "./components/SetBreakTimer";
import SetSessionTimer from "./components/SetSessionTimer";
import Controls from "./components/Controls";

function App() {
  const [breakTime, setBreakTimer] = useState(300);
  const [sessionTime, setSessionTimer] = useState(1500);
  const [currentTimer, setCurrentTimer] = useState(1500);
  const [isPlaying, setIsPlaying] = useState(false);

  const reset = () => {
    setBreakTimer(300);
    setSessionTimer(1500);
    setIsPlaying(false);
    setCurrentTimer(1500);
  };

  const playOrPauseTimer = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    //
    let interval = null;

    if (isPlaying && currentTimer > 0) {
      // start countdown  shouldStartCountdown()

      interval = setInterval(() => {
        setCurrentTimer((prev) => prev - 1);
      }, 1000);
    } else if (!isPlaying && currentTimer !== 0) {
      // stop countdown
      clearInterval(interval);
    } else if (isPlaying && currentTimer === 0) {
      setCurrentTimer(breakTime);
    }

    return () => clearInterval(interval);
  }, [isPlaying, currentTimer]);

  return (
    <div className="App">
      <h1 id="header__title">25 + 5 Clock </h1>
      <div id="setTimer__container">
        <SetBreakTimer breakTime={breakTime} setBreakTimer={setBreakTimer} />
        <SetSessionTimer
          sessionTime={sessionTime}
          setSessionTimer={setSessionTimer}
          setCurrentTimer={setCurrentTimer}
        />
      </div>
      <CountdownTimer currentTimer={currentTimer} />
      <Controls reset={reset} playOrPauseTimer={playOrPauseTimer} />
    </div>
  );
}

export default App;
