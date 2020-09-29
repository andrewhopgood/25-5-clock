import React from "react";
import "../styles/SetSessionTimer.css";

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
      <div id="session-label">Session Length</div>
      <button id="session-increment" onClick={incrementSessionTimer}>
        +
      </button>
      <button id="session-decrement" onClick={decrementSessionTimer}>
        -
      </button>
      <div id="session-length">{sessionTime / 60}</div>
    </div>
  );
}

export default SetSessionTimer;
