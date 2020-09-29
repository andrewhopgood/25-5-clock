import React, { useState } from "react";
import "../styles/Controls.css";

function Controls({ reset, playOrPauseTimer }) {
  return (
    <div id="controls__container">
      <h1>Controls</h1>
      <button id="start_stop" onClick={playOrPauseTimer}>
        Start/Stop
      </button>
      <button onClick={reset} id="reset">
        Reset
      </button>
    </div>
  );
}

export default Controls;
