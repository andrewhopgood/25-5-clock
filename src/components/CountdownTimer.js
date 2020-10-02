import React from "react";
import "../styles/CountdownTimer.css";

function CountdownTimer({
  currentTimer,
  isPlaying,
  setCurrentTimer,
  breakTime,
  sessionTime,
  setIsSessionActive,
  isSessionActive,
}) {
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

  let lessThanTenSeconds = <div id="time-left">{formatTime(currentTimer)}</div>;
  if (currentTimer < 10) {
    lessThanTenSeconds = (
      <div id="time-left" style={{ color: "#e44c4c" }}>
        {formatTime(currentTimer)}
      </div>
    );
  }

  return (
    <div id="countdown__timer">
      <div>
        <h1 id="timer-label">{whichTimer}</h1>
        {lessThanTenSeconds}
      </div>
    </div>
  );
}

export default CountdownTimer;
