import React from "react";
import SetBreakTimer from "./SetBreakTimer";
import SetSessionTimer from "./SetSessionTimer";
import "../styles/SetTimerContainer.css";

function SetTimerContainer({
  breakTimer,
  setBreakTimer,
  sessionTimer,
  setSessionTimer,
}) {
  return (
    <div id="setTimer__container">
      <SetBreakTimer breakTimer={breakTimer} setBreakTimer={setBreakTimer} />
      <SetSessionTimer
        sessionTimer={sessionTimer}
        setSessionTimer={setSessionTimer}
      />
    </div>
  );
}

export default SetTimerContainer;
