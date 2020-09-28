import React from "react";
import "../styles/SetSessionTimer.css";

function SetSessionTimer({ sessionTimer, setSessionTimer }) {
  return (
    <div id="session-timer__container">
      <button>+</button>
      <button>-</button>
      <div>{sessionTimer}</div>
    </div>
  );
}

export default SetSessionTimer;
