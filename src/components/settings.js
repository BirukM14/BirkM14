import React, { useState } from "react";

const Settings = ({ setWorkMinutes, setBreakMinutes }) => {
  const [workInput, setWorkInput] = useState(25);
  const [breakInput, setBreakInput] = useState(5);

  const handleApply = () => {
    setWorkMinutes(Number(workInput));
    setBreakMinutes(Number(breakInput));
  };

  return (
    <div>
      <h3>Settings</h3>
      <div>
        <label>
          Work Duration (minutes):
          <input
            type="number"
            value={workInput}
            onChange={(e) => setWorkInput(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Break Duration (minutes):
          <input
            type="number"
            value={breakInput}
            onChange={(e) => setBreakInput(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleApply}>Apply</button>
    </div>
  );
};

export default Settings;
