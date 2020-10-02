import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import CountdownTimer from "./components/CountdownTimer";
import BreakTime from "./components/BreakTime";
import SessionTime from "./components/SessionTime";
import Controls from "./components/Controls";

function App() {
  const [breakTime, setBreakTimer] = useState(300);
  const [sessionTime, setSessionTimer] = useState(1500);
  const [currentTimer, setCurrentTimer] = useState(1500);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSessionActive, setIsSessionActive] = useState(true);
  const audio = useRef(null);
  const startCountdownTimer = () => {
    setIsPlaying(true);
  };
  const stopCountdownTimer = () => {
    setIsPlaying(false);
  };

  const resetAll = () => {
    setBreakTimer(300);
    setSessionTimer(1500);
    setIsPlaying(false);
    setCurrentTimer(1500);
    setIsSessionActive(true);
    audio.current.load();
  };

  const switchTimer = () => {
    if (isSessionActive) {
      setIsSessionActive(!isSessionActive);
      setCurrentTimer(breakTime);
    } else {
      setIsSessionActive(!isSessionActive);
      setCurrentTimer(sessionTime);
    }
  };

  useEffect(() => {
    // watch a stateful variable and allow me to take action when value is changed
    let interval = null;

    if (isPlaying && currentTimer > 0) {
      interval = setInterval(() => {
        setCurrentTimer((prev) => prev - 1);
      }, 1000);
    } else if (isPlaying && currentTimer === 0) {
      audio.current.play();
      switchTimer();
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  });

  return (
    <div className="App">
      <h1 id="header__title">Pomodoro Timer</h1>
      <div id="setTimer__container">
        <BreakTime breakTime={breakTime} setBreakTimer={setBreakTimer} />
        <SessionTime
          sessionTime={sessionTime}
          setSessionTimer={setSessionTimer}
          setCurrentTimer={setCurrentTimer}
        />
      </div>

      <CountdownTimer
        currentTimer={currentTimer}
        isSessionActive={isSessionActive}
      />
      <Controls
        resetAll={resetAll}
        startCountdownTimer={startCountdownTimer}
        stopCountdownTimer={stopCountdownTimer}
      />
      <audio
        src="https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-two/app_alert_tone_ringtone_001.mp3?_=1"
        ref={audio}
        id="beep"
      />
    </div>
  );
}

export default App;
