import React, { useState } from "react";
import "./App.scss";
import SwitchView from "./SwitchView";

function App() {
  const [isOn, setIsOn] = useState(true);
  const onChange = (isOn: boolean) => setIsOn(isOn);
  return (
    <div className="app-container">
      <label className="app-switch-view-info-label">
        Switch is {isOn ? "on" : "off"}
      </label>
      <div className="app-switch-view-container">
        <SwitchView id="switch-1" value={isOn} onChange={onChange} />
      </div>
    </div>
  );
}

export default App;
