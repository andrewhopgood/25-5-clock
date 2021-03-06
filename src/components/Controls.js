import React, { useState } from "react";
import "../styles/Controls.css";

function Controls({ resetAll, startCountdownTimer, stopCountdownTimer }) {
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const start = () => {
    setIsTimerRunning(true); // User Interface change
    startCountdownTimer(); // StartEvent
  };

  const stop = () => {
    setIsTimerRunning(false); // User Interface change
    stopCountdownTimer(); // StopEvent
  };

  const reset = () => {
    setIsTimerRunning(false);
    resetAll();
  };

  let playOrPauseButton = (
    <button id="btn__start__stop" onClick={start}>
      Play
    </button>
  );
  if (isTimerRunning) {
    playOrPauseButton = (
      <button id="btn__start__stop" onClick={stop}>
        Pause
      </button>
    );
  }

  return (
    <div id="controls__container">
      {playOrPauseButton}
      <button onClick={reset} id="btn__reset">
        Reset
      </button>
    </div>
  );
}

export default Controls;
