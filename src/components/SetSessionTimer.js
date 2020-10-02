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
      <div id="session_controls">
      <button id="session-decrement" onClick={decrementSessionTimer}>
          -
        </button>
        <div id="session-length">{sessionTime / 60}</div>
        <button id="session-increment" onClick={incrementSessionTimer}>
          +
        </button>
        
      </div>
    </div>
  );
}

export default SetSessionTimer;
