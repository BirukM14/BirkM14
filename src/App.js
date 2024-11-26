import React, { useState } from "react";
import Timer from "./components/timer";
import Controls from "./components/controls";
import Settings from "./components/settings";
import './index.css';

function App() {
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [isWorkTimer, setIsWorkTimer] = useState(true); // Track work/break state
  const [isActive, setIsActive] = useState(false);

  const resetTimer = () => {
    setIsActive(false);
    setIsWorkTimer(true);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Pomodoro Timer</h1>
      <Timer
        initialMinutes={isWorkTimer ? workMinutes : breakMinutes}
        isActive={isActive}
        onTimerEnd={() => setIsWorkTimer(!isWorkTimer)}
      />
      <Controls isActive={isActive} setIsActive={setIsActive} resetTimer={resetTimer} />
      <Settings setWorkMinutes={setWorkMinutes} setBreakMinutes={setBreakMinutes} />
    </div>
  );
}

export default App;
