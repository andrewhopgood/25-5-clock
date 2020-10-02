import React from "react";
import "../styles/SetBreakTimer.css";

function SetBreakTimer({ breakTime, setBreakTimer }) {
  const incrementBreakTimer = () => {
    if (breakTime >= 60 && breakTime < 3600) {
      setBreakTimer((prev) => prev + 60);
    }
  };

  const decrementBreakTimer = () => {
    if (breakTime > 60 && breakTime <= 3600) {
      setBreakTimer((prev) => prev - 60);
    }
  };
  return (
    <div id="break-timer__container">
      <div id="break-label">Break Length</div>
      <div id="break_controls">
        <button id="break-decrement" onClick={decrementBreakTimer}>
          -
        </button>
        <div id="break-length">{breakTime / 60}</div>
        <button id="break-increment" onClick={incrementBreakTimer}>
          +
        </button>
      </div>
    </div>
  );
}

export default SetBreakTimer;
