import React from "react";
import "../styles/SetBreakTimer.css";

function SetBreakTimer({ breakTimer, setBreakTimer }) {
  return (
    <div id="break-timer__container">
      <button>+</button>
      <button>-</button>
      <div>{breakTimer}</div>
    </div>
  );
}

export default SetBreakTimer;
