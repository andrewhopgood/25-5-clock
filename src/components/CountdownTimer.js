import React from "react";
import "../styles/CountdownTimer.css";

function CountdownTimer({ currentTimer, isSessionActive }) {
  const formatTime = (currentTimer) => {
    let minutes = Math.floor(currentTimer / 60);
    let seconds = currentTimer % 60;

    if (minutes < 10) minutes = "0" + minutes;

    if (seconds < 10) seconds = "0" + seconds;

    return `${minutes}:${seconds}`;
  };

  let whichTimer = "Session Time";
  if (!isSessionActive) {
    whichTimer = "Break Time";
  }

  let lessThanTenSeconds = (
    <div id="time_countdown">{formatTime(currentTimer)}</div>
  );
  if (currentTimer < 10) {
    lessThanTenSeconds = (
      <div id="time_countdown" style={{ color: "#e44c4c" }}>
        {formatTime(currentTimer)}
      </div>
    );
  }

  return (
    <div id="timer__countdown__container">
      <div>
        <h1 id="timer__name">{whichTimer}</h1>
        {lessThanTenSeconds}
      </div>
    </div>
  );
}

export default CountdownTimer;
