import React, { useState } from "react";
import "../styles/CountdownTimer.css";

function CountdownTimer({ currentTimer }) {
  const formatTime = (currentTimer) => {
    let minutes = Math.floor(currentTimer / 60);
    let seconds = currentTimer % 60;

    if (minutes < 10) minutes = "0" + minutes;

    if (seconds < 10) seconds = "0" + seconds;

    return `${minutes}:${seconds}`;
  };

  return (
    <div id="countdown__timer">
      <div>
        <h1 id="timer-label">Session</h1>
      </div>
      <div id="time-left">{formatTime(currentTimer)}</div>
    </div>
  );
}

export default CountdownTimer;
