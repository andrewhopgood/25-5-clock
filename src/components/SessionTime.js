import React from "react";
import "../styles/SessionTime.css";

function SetSessionTimer({ sessionTime, setSessionTimer, setCurrentTimer }) {
  const incrementSessionTimer = () => {
    if (sessionTime >= 60 && sessionTime < 3600) {
      setSessionTimer((prev) => prev + 60);
      setCurrentTimer((prev) => prev + 60);
    }
  };

  const decrementSessionTimer = () => {
    if (sessionTime > 60 && sessionTime <= 3600) {
      setSessionTimer((prev) => prev - 60);
      setCurrentTimer((prev) => prev - 60);
    }
  };
  return (
    <div id="session-timer__container">
      <div id="session-timer__name">Session Length</div>
      <div id="session-timer__controls">
        <button id="session-timer__decrement" onClick={decrementSessionTimer}>
          -
        </button>
        <div id="session-timer__length">{sessionTime / 60}</div>
        <button id="session-timer__increment" onClick={incrementSessionTimer}>
          +
        </button>
      </div>
    </div>
  );
}

export default SetSessionTimer;
