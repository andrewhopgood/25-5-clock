import React from "react";
import "../styles/BreakTime.css";

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
      <div id="break-timer__name">Break Length</div>
      <div id="break-timer__controls">
        <button id="break-timer__decrement" onClick={decrementBreakTimer}>
          -
        </button>
        <div id="break-timer__length">{breakTime / 60}</div>
        <button id="break-timer__increment" onClick={incrementBreakTimer}>
          +
        </button>
      </div>
    </div>
  );
}

export default SetBreakTimer;
