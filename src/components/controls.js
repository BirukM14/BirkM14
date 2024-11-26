import React from "react";

const Controls = ({ isActive, setIsActive, resetTimer }) => {
  return (
    <div>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? "Pause" : "Start"}
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Controls;
